# Expensor

Expensor is a service where users can create expenses lists. 

Main entities:

- Users
- Lists
- Items

###Data model

####User atributes

| id       | username     | password | created_at | updated_at |
| :------------- | -----------: | -----------: | -----------: |-----------: |
|  asderf23 |  posito    | 123456  | xxxx-xx-xx | xxxx-xx-xx

####User lists atributes

| user_id      | list_id     |
| :------------- | -----------: |
|  asderf23 |  zxfd    |


####Lists atributes

| id       | list_name     | list_description | created_at | updated_at |
| :------------- | -----------: | -----------: |-----------: | -----------: |
|  zxfd | Weekly expenses  | Just a simple list where I insert my weekly expenses | xxxx-xx-xx | xxxx-xx-xx

####Items atributes

| id       | item_name     | item_cost | item_description | list_id | created_at | updated_at |
| :------------- | -----------: | -----------: | -----------: |-----------: | -----------: | -----------: |
|  zxfd | water   | 10    | Monthly water | zxfd | xxxx-xx-xx | xxxx-xx-xx