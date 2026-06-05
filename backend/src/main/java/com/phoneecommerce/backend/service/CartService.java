package com.phoneecommerce.backend.service;

import com.phoneecommerce.backend.dto.request.OrderRequest;
import com.phoneecommerce.backend.dto.response.OrderResponse;

interface CartService {
    OrderResponse CartResponse(OrderRequest request);
}
