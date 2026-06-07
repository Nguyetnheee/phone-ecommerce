package com.phoneecommerce.backend.dto.request;

import com.phoneecommerce.backend.enums.OrderStatus;
import lombok.Data;

@Data
public class UpdateOrderStatusRequest {
    private OrderStatus status;
}