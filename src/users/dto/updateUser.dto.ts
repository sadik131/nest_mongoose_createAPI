import { IsOptional, IsString } from "class-validator";

export class updateUserDto {
    
    @IsOptional()
    @IsString()
    userName?: string;
    
    @IsOptional()
    @IsString()
    displayName?: string;
    
    @IsOptional()
    @IsString()
    imgUrl?: string;

}