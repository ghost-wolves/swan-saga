package learn.swanback.data;

import learn.swanback.models.AppUser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.test.context.ActiveProfiles;
import org.mockito.Spy;
import org.mockito.Mockito;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest(properties = "spring.profiles.active=test")
@ActiveProfiles("test")
public class AppUserJdbcTemplateRepositoryTest {

    @Autowired
    private AppUserJdbcTemplateRepository repository;

    @Mock
    private JdbcTemplate jdbcTemplate;

    @Spy
    GeneratedKeyHolder keyHolder;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        repository = new AppUserJdbcTemplateRepository(jdbcTemplate);

        Mockito.doReturn(1).when(keyHolder).getKey();
    }

    @Test
    public void testCreate() {
        AppUser user = new AppUser(0, "testuser", "P@ssw0rd!", true, Collections.emptyList());

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        keyHolder.getKeyList().add(Collections.singletonMap("app_user_id", 1));

        when(jdbcTemplate.update(any(), any(GeneratedKeyHolder.class))).thenReturn(1);
        when(jdbcTemplate.query(anyString(), (PreparedStatementSetter) any(), (ResultSetExtractor<Object>) any())).thenReturn(Collections.emptyList());

        AppUser result = repository.create(user);

        assertNotNull(result);
        assertEquals(1, result.getAppUserId());
        assertEquals("testuser", result.getUsername());
        assertEquals("P@ssw0rd!", result.getPassword());
    }
}
