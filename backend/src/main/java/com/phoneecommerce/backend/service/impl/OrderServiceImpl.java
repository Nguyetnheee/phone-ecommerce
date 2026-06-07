package com.phoneecommerce.backend.service.impl;

import com.phoneecommerce.backend.dto.request.OrderRequest;
import com.phoneecommerce.backend.dto.response.OrderResponse;
import com.phoneecommerce.backend.entity.Order;
import com.phoneecommerce.backend.entity.Product;
import com.phoneecommerce.backend.entity.User;
import com.phoneecommerce.backend.enums.OrderStatus;
import com.phoneecommerce.backend.repository.OrderRepository;
import com.phoneecommerce.backend.repository.ProductRepository;

import com.phoneecommerce.backend.repository.UserRepository;
import com.phoneecommerce.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    UserRepository userRepository;
    @Override
    public OrderResponse Checkout(OrderRequest request,Long id) {
        request.getCartItemList().forEach(cartItem -> {Product item =productRepository.findById(cartItem.getId())
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sản phẩm"));
            item.setStockQuantity(item.getStockQuantity() - cartItem.getQuantity());
            productRepository.save(item);});
            User user = userRepository.findById(id).orElseThrow(()-> new RuntimeException("User không tồn tại"));
            Order order = Order.builder()
                    .user_id(user)
                    .status(OrderStatus.PACKAGING)
                    .name(request.getReceiver_name())
                    .address(request.getAddress())
                    .items(request.getCartItemList())
                    .build();

            orderRepository.save(order);

        return OrderResponse.builder()
                .receiver_name(request.getReceiver_name())
                .address(request.getAddress())
                .phone(request.getPhone())
                .cart(request.getCartItemList())
                .build();
    }

    @Override
    public OrderResponse CheckOrder(Long id) {
        Order order = orderRepository.findAllByUser_id(id).orElseThrow(()-> new RuntimeException("Order không tồn tại"));
        return OrderResponse.builder()
                .receiver_name(order.getName())
                .address(order.getAddress())
                .phone(order.getPhone_number())
                .cart(order.getItems())
                .build();
    }
}
