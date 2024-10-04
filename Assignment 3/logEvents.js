// const fs = require('fs').promises;
import fs from 'fs/promises'
import path from 'path';
import { v4 as uuidv4} from 'uuid';
import { format } from 'date-fns';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function LogEvents(message) {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime} - ${uuidv4()} - ${message}\n`;

    const logDir = path.join(__dirname, '/Logs');

    try {
        await fs.access(logDir);
    } catch {
        await fs.mkdir(logDir);
    }

    await fs.appendFile(path.join(logDir, 'eventLogs.txt'), logItem);
}

export default LogEvents;






