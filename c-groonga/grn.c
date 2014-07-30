#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <groonga.h>

int
main (int argc, char **argv)
{
  grn_ctx ctx;
  grn_obj *db, *table, *column, *key_type, *value_type;
  grn_id id;
  grn_rc rc;
  int added;
  grn_obj value, bulk;

  /* groonga db file */
  const char *path = "db/test.grn";

  if (grn_init()) {
    fprintf(stderr, "grn_init() failed\n");
    return -1;
  }

  /* initialize grn_ctx */
  if (grn_ctx_init(&ctx, 0)) {
    fprintf(stderr, "grn_ctx_init() failed\n");
    return -1;
  }

  /* open db */
  db = grn_db_open(&ctx, path);

  if (!db) {
    db = grn_db_create(&ctx, path, NULL);
  }

  if (!db) {
    fprintf(stderr, "db initialize failed\n");
  }

  printf("hello world!\n");
  return 0;
}
