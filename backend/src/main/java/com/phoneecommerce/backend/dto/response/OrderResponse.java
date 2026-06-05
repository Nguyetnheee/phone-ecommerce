package com.phoneecommerce.backend.dto.response;

import com.phoneecommerce.backend.entity.CartItem;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderResponse {
    private String receiver_name;

    private String phone;

    private String address;

    private List<CartItem> cart;
}
