package pe.gob.pronacej.Security;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    //Especificar los campos que requeriremmos para la autenticacion
    private String email;
    String password;

}
