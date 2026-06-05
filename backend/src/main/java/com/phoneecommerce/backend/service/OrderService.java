package com.phoneecommerce.backend.service;

import com.phoneecommerce.backend.dto.request.OrderRequest;
import com.phoneecommerce.backend.dto.response.OrderResponse;

public interface OrderService {
    OrderResponse CartResponse(OrderRequest request);
}
