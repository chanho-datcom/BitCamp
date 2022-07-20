package com.bitcamp.reactboard.model;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("user")
public class UserDTO {
    private int id;
    private String username;
    private String password;
    private String nickname;
    private int grade;

    public boolean equals(Object o){
        if(o instanceof UserDTO){
            UserDTO u = (UserDTO) o;
            return u.id == id;
        }
        return false;
    }
}
