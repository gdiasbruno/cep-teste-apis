package com.junitmockito.unittests.asserts;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class HamcrestMatchersTest {

    @Test
    public void learning() {
        List<Integer> numbers = Arrays.asList(12,15,45);

        assertThat(numbers, hasSize(3));
        assertThat(numbers, hasItems(12,45));
        assertThat(numbers, everyItem(greaterThan(11)));
        assertThat(numbers, everyItem(lessThan(46)));

        assertThat("", isEmptyString());
        assertThat("ABCDEF", containsString("BCD"));
        assertThat("ABCDEF", startsWith("AB"));
        assertThat("ABCDEF", endsWith("DEF"));
    }
}
