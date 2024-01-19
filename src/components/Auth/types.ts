export type User={
    [key:string]: string,
    type: UserTypes;
}

export enum UserTypes{  
    CUSTOMER = 'customer',
    RESTAURANT = 'restaurant'
}

export enum AuthModals{
    LOGIN= 'login',
    REGISTER  = 'register',
}