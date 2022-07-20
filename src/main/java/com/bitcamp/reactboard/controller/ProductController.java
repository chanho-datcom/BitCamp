package com.bitcamp.reactboard.controller;

import com.bitcamp.reactboard.model.ProductDTO;
import com.bitcamp.reactboard.model.ProductDTO2;
import com.bitcamp.reactboard.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/list", method=RequestMethod.GET)
    public List<ProductDTO2> selectAll(){
        return productService.selectAll();
    }

    @RequestMapping(value="/register", method=RequestMethod.POST)
    public void registerProduct(@RequestBody ProductDTO p){
        System.out.println(p.getProductname());
        productService.insert(p);
    }
    @RequestMapping(value="/sellerList", method=RequestMethod.POST)
    public List<ProductDTO> selectAllBySellerId(@RequestBody ProductDTO p){
        System.out.println(p.getSellerid()+"  판매자 아이디에 따른 리스트 메소드");

        return productService.selectAllBySellerId(Integer.parseInt(p.getSellerid()));
    }
    @RequestMapping(value="selectOne", method=RequestMethod.POST)
    public ProductDTO selectOne(@RequestBody ProductDTO p){
        return productService.selectOne(p.getId());
    }
}
