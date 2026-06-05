package com.phoneecommerce.backend.service;

import com.phoneecommerce.backend.dto.request.OrderRequest;
import com.phoneecommerce.backend.dto.response.OrderResponse;

public interface OrderService {
    OrderResponse Checkout(OrderRequest request,Long id);
    OrderResponse CheckOrder(Long id);

}
