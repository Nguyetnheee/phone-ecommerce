package com.phoneecommerce.backend.dto.request;

import com.phoneecommerce.backend.entity.CartItem;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartRequest {
    private String receiver_name;

    @Pattern(regexp = "^[0-9]{10,}$", message = "Số điện thoại phải chỉ chứa số và có ít nhất 10 chữ số")
    private String phone;

    @NotNull(message = "Địa chỉ không được để trống")
    @Size(min =10, message = "Địa chỉ ít nhất phải 10 ký tự")
    private String address;

    private List<CartItem> cartItemList;
}
