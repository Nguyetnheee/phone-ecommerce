package com.phoneecommerce.backend.service.impl;

import com.phoneecommerce.backend.dto.request.OrderRequest;
import com.phoneecommerce.backend.dto.response.OrderResponse;
import com.phoneecommerce.backend.repository.ProductRepository;

import com.phoneecommerce.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;

public class OrderServiceImpl implements OrderService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public OrderResponse CartResponse(OrderRequest request) {
        return null;
    }
}
