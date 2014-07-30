/* http://createfield.com/C%E8%A8%80%E8%AA%9E%E3%81%A7Groonga%E3%81%AEAPI%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95 */
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

  key_type = grn_ctx_at(&ctx, GRN_DB_SHORT_TEXT);
  
  GRN_TABLE_OPEN_OR_CREATE(&ctx, "table", 5, NULL, GRN_OBJ_TABLE_HASH_KEY|GRN_OBJ_PERSISTENT, key_type, NULL, table);
  
  value_type = grn_ctx_at(&ctx, GRN_DB_TEXT);
  GRN_COLUMN_OPEN_OR_CREATE(&ctx, table, "col", 3, NULL, GRN_OBJ_PERSISTENT|GRN_OBJ_COLUMN_SCALAR, value_type, column);

  id = grn_table_add(&ctx, table, "rec1", 4, &added);
  printf("id=%d, added=%d\n", id, added);

  GRN_TEXT_INIT(&value, 0);
  GRN_TEXT_PUT(&ctx, &value, "groonga world.", 14);

  rc = grn_obj_set_value(&ctx, column, id, &value, GRN_OBJ_SET);
  printf("grn_obj_set_value: rc=%d\n", rc);

  GRN_TEXT_INIT(&bulk, 0);
  GRN_BULK_REWIND(&bulk);

  grn_obj_get_value(&ctx, column, id, &bulk);
  printf("grn_obj_get_value: bulk=%s\n", GRN_BULK_HEAD(&bulk));

  grn_obj_close(&ctx, &bulk);

  if (grn_obj_close(&ctx, db)) {
    fprintf(stderr, "grn_obj_close() failed\n");
    return -1;
  }
 
  if (grn_ctx_fin(&ctx)) {
    fprintf(stderr, "grn_ctx_fin() failed\n");
    return -1;
  } 

  if (grn_fin()) {
    fprintf(stderr, "grn_fin() failed\n");
    return -1;
  }
  
  return 0;
}
