/**
 * Cross-platform native method to receive the list of the launched processes
 * @see https://github.com/reklatsmasters/node-process-list
 */
declare module 'process-list' {

    interface ProcessListSnapshot {
        /**
         * Process PID
         */
        pid: number;
        /**
         * parent process pid
         */
        ppid: number;
        /**
         * Process name (title)
         */
        name: string;
        /**
         * Full path to the process binary file
         */
        path: string;
        /**
         * Threads per process
         */
        threads: number;
        /**
         * The owner of the process
         */
        owner: string;
        /**
         * An os-specific process priority
         */
        priority: number;
        /**
         * Full command line of the process
         */
        cmdline: string;
        /**
         * The process start date / time
         */
        starttime: Date;
        /**
         * Virtual memory size in bytes used by process
         */
        vmem: string;
        /**
         * Physical memory size in bytes used by process
         */
        pmem: string;
        /**
         * Cpu usage by process in percent
         */
        cpu: number;
        /**
         * Amount of time in ms that this process has been scheduled in user mode
         */
        utim: string;
        /**
         * Amount of time that in ms this process has been scheduled in kernel mode
         */
        stime: string;
    }

    /**
     * Returns the list of the launched processes.
     */
    export function snapshot(): Promise<ProcessListSnapshot[]>

    /**
     * Returns the list of the launched processes.
     * @param args List of fields to select
     */
    export function snapshot<T extends (keyof ProcessListSnapshot)[]>(...args: T): Promise<Pick<ProcessListSnapshot, T[number]>[]>
}