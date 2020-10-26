// TODO: Use menuStore to hook up the hamburger
//  menu nav to its respective button so that z-index
//  will work, because elements cannot be nested
//  within a z-index'd el if they want z-index to
//  work.
// Currently, hamburger nav is overlapping
// the header.

import { writable } from "svelte/store";

export const opened = writable(false);
