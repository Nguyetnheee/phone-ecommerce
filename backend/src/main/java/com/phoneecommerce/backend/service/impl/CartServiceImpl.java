package com.phoneecommerce.backend.service.impl;

import com.phoneecommerce.backend.dto.request.AddToCartRequest;
import com.phoneecommerce.backend.dto.request.CartRequest;
import com.phoneecommerce.backend.dto.response.CartResponse;
import com.phoneecommerce.backend.repository.ProductRepository;
import com.phoneecommerce.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CartServiceImpl implements CartService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public CartResponse CartResponse(CartRequest request, AddToCartRequest addToCartRequest) {
        return null;
    }
}
