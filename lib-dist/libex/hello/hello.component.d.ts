import { OnInit } from '@angular/core';
import { ShellService } from './../services/shell.service';
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';
export declare class HelloComponent implements OnInit {
    currentUserService: CurrentUserService;
    userProfile: UserProfile;
    shell: ShellService;
    userName: string;
    title: string;
    constructor(currentUserService: CurrentUserService, userProfile: UserProfile, shell: ShellService);
    ngOnInit(): void;
    getUserName(): string;
}
