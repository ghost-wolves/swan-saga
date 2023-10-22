package learn.swanback.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import learn.swanback.models.AppUser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.lang.reflect.Field;
import java.security.Key;
import java.util.List;

public class JwtConverterTest {

    private JwtConverter jwtConverter;
    private Key key;

    @BeforeEach
    void setUp() throws NoSuchFieldException, IllegalAccessException {
        jwtConverter = new JwtConverter();

        // Use reflection to access the private 'key' field in JwtConverter
        Field keyField = JwtConverter.class.getDeclaredField("key");
        keyField.setAccessible(true);
        key = (Key) keyField.get(jwtConverter);
    }

    @Test
    void getTokenFromUser_validUser_shouldReturnValidToken() {
        // given a valid user
        AppUser user = new AppUser(1, "testUser", "password", true,
                List.of("USER"));

        // when we ask for a token
        String token = jwtConverter.getTokenFromUser(user);

        // then the token should be valid and contain the correct information
        assertNotNull(token);

        // parse the token and validate claims
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key) // use the key accessed via reflection
                .build()
                .parseClaimsJws(token)
                .getBody();

        assertEquals("testUser", claims.getSubject());
        assertEquals("USER", claims.get("authorities"));
        assertEquals(1, claims.get("app_user_id"));
        assertNotNull(claims.getExpiration());
    }

}
