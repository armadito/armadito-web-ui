/***

Copyright (C) 2015, 2016 Teclib'

This file is part of Armadito gui.

Armadito core is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Armadito core is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with Armadito core.  If not, see <http://www.gnu.org/licenses/>.

***/

#ifndef TOOLS_JUTIL_H
#define TOOLS_JUTIL_H

#include <json.h>
#include <stdint.h>

const char *j_get_string(struct json_object *j_obj, const char *key);

int j_get_int(struct json_object *j_obj, const char *key);

int64_t j_get_int64(struct json_object *j_obj, const char *key);

#endif