import { ArtistHome } from "../../../src/artists/components/ArtistHome";
import {describe, expect, test} from '@jest/globals';

describe("Pruebas artistHome", () => {
  test("ArtistHome debe retornar un ", () => {
    const name = "calle trece";
    const image = "";

    expect(name).toBe(` su nombre es${name}`);
  });
});
