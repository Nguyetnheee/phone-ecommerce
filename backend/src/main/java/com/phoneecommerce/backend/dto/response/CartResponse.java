package com.phoneecommerce.backend.dto.response;

import com.phoneecommerce.backend.entity.CartItem;

import java.util.List;

public class CartResponse {
    private String receiver_name;

    private String phone;

    private String address;

    private List<CartItem> cart;
}
