package com.bitcamp.reactboard.model;

import lombok.Data;
import org.apache.ibatis.type.Alias;

import java.sql.Timestamp;
import java.util.Calendar;

@Data
@Alias("product")
public class ProductDTO {
    private int id;
    private String productname;
    private String sellerid;
    private Calendar registerDate;
    private Calendar updatedDate;
    private int likes;
    private int counts;



    public void setRegisterDate(Timestamp registerDate) {
        this.registerDate = Calendar.getInstance();
        this.registerDate.setTime(registerDate);
    }

    public void setUpdatedDate(Timestamp updatedDate) {
        this.updatedDate = Calendar.getInstance();
        this.updatedDate.setTime(updatedDate);
    }
}