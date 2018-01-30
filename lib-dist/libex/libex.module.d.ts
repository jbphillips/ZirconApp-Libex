import { ShellService } from './services/shell.service';
export declare class LibexModule {
    static forRoot(): {
        ngModule: typeof LibexModule;
        providers: typeof ShellService[];
    };
}
