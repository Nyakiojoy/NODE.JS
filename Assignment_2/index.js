import fs from 'fs'; 
import path from 'path';

function directoryToTree(rootDir, depth) {
    function buildTree(currentPath, currentDepth) {
        const items = fs.readdirSync(currentPath);
        const node = {
            path: currentPath.replace(/^\.\//, ''), 
            name: path.basename(currentPath), 
            type: 'dir',
            size: getDirSize(currentPath),
            children: []
        };

        if (currentDepth < depth) {
            for (const item of items) {
                const itemPath = path.join(currentPath, item);
                const stats = fs.statSync(itemPath);
                
                if (stats.isDirectory()) {
                    node.children.push(buildTree(itemPath, currentDepth + 1));
                } else if (stats.isFile() ) {
                    node.children.push({
                        path: itemPath.replace(/^\.\//, ''),
                        name: item,
                        type: 'file',
                        size: stats.size 
                    });
                }
            }
        }
        return node;
    }

    function getDirSize(directoryPath) {
        let totalSize = 0;
        const items = fs.readdirSync(directoryPath);
        for (const item of items) {
            const itemPath = path.join(directoryPath, item);
            const stats = fs.statSync(itemPath);
            totalSize += stats.size; 
            if (stats.isDirectory()) {
                totalSize += getDirSize(itemPath); 
            }
        }
        return totalSize;
    }

    
    return buildTree(path.resolve(process.cwd(), rootDir), 0);
}

const dirTree = directoryToTree("dummy_dir", 5); 
console.log(JSON.stringify(dirTree, null, 2));

 