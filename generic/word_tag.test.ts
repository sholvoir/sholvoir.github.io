import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Tag } from './word_tag.ts';

Deno.test('Tag', () => {
    assertEquals(Tag.get('ogden'), 1n);
    assertEquals(Tag.get('L5'), 0x00000200000n);
    assertEquals(new Tag(5n).value, 5n);
    const x = new Tag(1n);
    x.attach(2n);
    assertEquals(x.value, 3n);
    x.remove(1n);
    assertEquals(x.value, 2n);
    assertEquals(x.toString(), '2');
    const y = new Map<string, Tag>();
    y.set('p', new Tag(5n));
    y.get('p')?.attach(2n);
    assertEquals(y.get('p')?.value, 7n);
});
