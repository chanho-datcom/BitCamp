package com.bitcamp.reactboard.controller;

import com.bitcamp.reactboard.model.UserDTO;
import com.bitcamp.reactboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value="/logIn", method = RequestMethod.POST)
    public UserDTO logIn(@RequestBody UserDTO u){
        System.out.println(u.getUsername());
        u.setPassword(convertToSha(u.getPassword()));
        u = userService.auth(u);
        if ( u != null){
            System.out.println("로그인 성공");
        }
        return u;
    }
    @RequestMapping(value="/register", method = RequestMethod.POST)
    public int register(@RequestBody UserDTO u){
        u.setPassword(convertToSha(u.getPassword()));
        return userService.register(u);
    }
    @RequestMapping(value="/confirm", method=RequestMethod.POST)
    public UserDTO confirm(@RequestBody UserDTO u ){
        System.out.println("회원정보관리 이동시 확인 비밀번호 " +u.getPassword() +"\n\n\n\n\n\n");
        UserDTO temp = userService.selectOne(u.getId());
        if(temp.getPassword().equals(convertToSha(u.getPassword()))){
            return temp;
        }
        return null;
    }
    @RequestMapping(value="/selectOne", method=RequestMethod.POST)
    public UserDTO selectOne(@RequestBody UserDTO u){
        return userService.selectOne(u.getId());
    }
    @RequestMapping(value="/update", method=RequestMethod.POST)
    public boolean update(@RequestBody UserDTO u){
        System.out.println(u.getId());
        u.setPassword(convertToSha(u.getPassword()));
        if(userService.update(u)!=0){
            return true;
        }
        return false;
    }
    @RequestMapping(value="/delete", method=RequestMethod.POST)
    public boolean delete(@RequestBody UserDTO u){
        System.out.println("삭제 메소드 컨트롤러: " + u.getId());

        userService.delete(u.getId());
        if(userService.selectOne(u.getId()) == null){
            return true;
        }
        return false;
    }
    private String convertToSha(String password){
        String converted = null;
        StringBuilder builder = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes("UTF-8"));
            builder = new StringBuilder();
            for(int i  = 0 ; i < hash.length; i++){
                builder.append(String.format("%02x",255 & hash[i]));
                // -> 절댓값으로 바꾸는 과정
            }
            converted = builder.toString();

        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
        return converted;
    }
}
