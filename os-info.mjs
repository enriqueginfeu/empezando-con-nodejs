
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Informacion del sitema:');
console.log('__________________');

console.log('Nombre del siatema operativo', platform());
console.log('Version del siatema operativo', release());
console.log('Arquitectura', arch());
console.log('CPUs', cpus());
console.log('Memoria libre', freemem() / 1024 / 1024);
console.log('Memoria total', totalmem() / 1024 / 1024);
console.log('Uptime', uptime() / 60 / 60);