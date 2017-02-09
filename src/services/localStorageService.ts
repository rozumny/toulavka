import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    _appName = "app_";

    constructor() {
    }

    get(key: string, uselocal?: boolean): any {
        return new Promise<any>(resolve => {
            resolve(localStorage.getItem(uselocal ? key : this._appName + key));
        });
    }

    set(key: string, data: string, uselocal?: boolean) {
        return new Promise<any>(resolve => {
            localStorage.setItem(uselocal ? key : this._appName + key, data);
            resolve();
        });
    }
}

