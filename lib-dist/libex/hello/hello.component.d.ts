import { OnInit } from '@angular/core';
import { CurrentUserService } from '@zircon/gemsauth/dist/services/current.user.service';
import { UserProfile } from '@zircon/gemsauth/dist/modules/gems.cloud.dtos';
export declare class HelloComponent implements OnInit {
    currentUserService: CurrentUserService;
    userProfile: UserProfile;
    userName: string;
    title: string;
    constructor(currentUserService: CurrentUserService, userProfile: UserProfile);
    ngOnInit(): void;
    getUserName(): string;
}
