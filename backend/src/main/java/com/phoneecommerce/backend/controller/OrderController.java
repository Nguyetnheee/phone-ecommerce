package com.phoneecommerce.backend.controller;

import com.phoneecommerce.backend.dto.request.OrderRequest;
import com.phoneecommerce.backend.dto.response.OrderResponse;

import com.phoneecommerce.backend.service.OrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {


    @Autowired
    private OrderService orderService;

        @PostMapping("/checkout")
        public ResponseEntity<OrderResponse> checkout(@Valid @RequestBody OrderRequest orderRequest,@RequestParam Long user_id){
            OrderResponse orderResponse = orderService.Checkout(orderRequest,user_id);
            return ResponseEntity.ok(orderResponse);
        }
        @GetMapping("/status")
    public ResponseEntity<OrderResponse> checkOrder(@RequestParam Long user_id){
            OrderResponse orderResponse = orderService.CheckOrder( user_id);
            return ResponseEntity.ok(orderResponse);
        }
    }

