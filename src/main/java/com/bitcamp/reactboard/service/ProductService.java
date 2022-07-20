package com.bitcamp.reactboard.service;

import com.bitcamp.reactboard.model.ProductDTO;
import com.bitcamp.reactboard.model.ProductDTO2;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Repository
public class ProductService {
    private final String NAMESPACE = "com.bitcamp.reactboard.mapper.ProductMapper";

    @Autowired
    SqlSession sqlSession;

    public List<ProductDTO2> selectAll(){
        return sqlSession.selectList(NAMESPACE+".selectAll");
    }
    public List<ProductDTO> selectAllBySellerId(int sellerid){
        return sqlSession.selectList(NAMESPACE+".selectAllBySellerId", sellerid);
    }
    public void insert(ProductDTO p){
        sqlSession.insert(NAMESPACE+".insert", p);
    }
    public ProductDTO selectOne(int id){
        return sqlSession.selectOne(NAMESPACE+".selectOne", id);
    }
}
