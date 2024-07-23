import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserSettingDto {
    @IsBoolean()
    @IsOptional()
    notification?: boolean

    @IsBoolean()
    @IsOptional()
    sms?: boolean

    @IsBoolean()
    @IsOptional()
    test?: boolean

}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    userName: string;
    
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    displayName?: string;

    @IsOptional()
    setting?: UserSettingDto

}