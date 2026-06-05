package com.phoneecommerce.backend.service;

import com.phoneecommerce.backend.dto.request.AddToCartRequest;
import com.phoneecommerce.backend.dto.request.CartRequest;
import com.phoneecommerce.backend.dto.response.CartResponse;
import com.phoneecommerce.backend.entity.CartItem;

import java.util.List;

interface CartService {
    CartResponse CartResponse(CartRequest request,AddToCartRequest addToCartRequest);
}
