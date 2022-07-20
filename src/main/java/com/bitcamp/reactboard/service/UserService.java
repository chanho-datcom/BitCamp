package com.bitcamp.reactboard.service;

import com.bitcamp.reactboard.model.UserDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Repository
public class UserService {
    private final String NAMESPACE = "com.bitcamp.reactboard.mapper.UserMapper";
    @Autowired
    private SqlSession sqlSession;

    public UserDTO auth(UserDTO u){
        return sqlSession.selectOne(NAMESPACE+".auth", u);
    }
    public int register(UserDTO u){
        return sqlSession.insert(NAMESPACE+".insert", u);
    }
    public UserDTO selectOne(int id) {
        return sqlSession.selectOne(NAMESPACE+".selectOne", id);
    }
    public int update(UserDTO u){
        return sqlSession.update(NAMESPACE+".update", u);
    }
    public void delete(int id){
        sqlSession.delete(NAMESPACE+".delete", id);
    }
}
