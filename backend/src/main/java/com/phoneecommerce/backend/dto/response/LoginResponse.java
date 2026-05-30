package com.phoneecommerce.backend.dto.response;
import com.phoneecommerce.backend.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoginResponse {
    private String email;
    private String token;
    private UserRole role;
}
