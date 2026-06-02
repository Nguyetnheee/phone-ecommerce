package com.phoneecommerce.backend.dto.response;

import com.phoneecommerce.backend.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterResponse {
    private String fullname;
    private String message;
    private String email;
}
