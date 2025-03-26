# NestJS CRUD Endpointlari

## 1. POST so'rov - Yangi foydalanuvchi qo'shish

- **ENDPOINT:** `/user`
- **METHOD:** `POST`
- **REQUEST BODY:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string",
    "age": number
  }
  ```
- **RESPONSE:** 201 Created + yangi yaratilgan foydalanuvchi ma'lumotlari
- **KOD:**
  ```typescript
  @Post('/user')
  createUser(@Body() userData: CreateUserDto) {
    // Yangi foydalanuvchi yaratish logikasi
    return this.usersService.create(userData);
  }
  ```

## 2. GET so'rov - Barcha foydalanuvchilarni olish

- **ENDPOINT:** `/users`
- **METHOD:** `GET`
- **REQUEST BODY:** kerak emas
- **RESPONSE:** 200 OK + foydalanuvchilar ro'yxati
- **KOD:**
  ```typescript
  @Get('/users')
  getAllUsers() {
    // Barcha foydalanuvchilarni olish
    return this.usersService.findAll();
  }
  ```

## 3. GET so'rov - Bitta foydalanuvchini ID bo'yicha olish

- **ENDPOINT:** `/user/:id`
- **METHOD:** `GET`
- **REQUEST PARAMS:** id - foydalanuvchi identifikatori
- **RESPONSE:** 200 OK + foydalanuvchi ma'lumotlari yoki 404 Not Found
- **KOD:**
  ```typescript
  @Get('/user/:id')
  getUserById(@Param('id') id: string) {
    // ID bo'yicha foydalanuvchini topish
    return this.usersService.findOne(+id);
  }
  ```

## 4. PUT so'rov - Foydalanuvchi ma'lumotlarini yangilash

- **ENDPOINT:** `/user/:id`
- **METHOD:** `PUT`
- **REQUEST PARAMS:** id - foydalanuvchi identifikatori
- **REQUEST BODY:**
  ```json
  {
    "name": "string", // ixtiyoriy
    "email": "string", // ixtiyoriy
    "password": "string", // ixtiyoriy
    "age": number // ixtiyoriy
  }
  ```
- **RESPONSE:** 200 OK + yangilangan ma'lumotlar yoki 404 Not Found
- **KOD:**
  ```typescript
  @Put('/user/:id')
  updateUser(@Param('id') id: string, @Body() updateData: UpdateUserDto) {
    // Foydalanuvchi ma'lumotlarini yangilash
    return this.usersService.update(+id, updateData);
  }
  ```

## 5. DELETE so'rov - Foydalanuvchini o'chirish

- **ENDPOINT:** `/user/:id`
- **METHOD:** `DELETE`
- **REQUEST PARAMS:** id - foydalanuvchi identifikatori
- **RESPONSE:** 204 No Content yoki 404 Not Found
- **KOD:**
  ```typescript
  @Delete('/user/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeUser(@Param('id') id: string) {
    // Foydalanuvchini o'chirish
    this.usersService.remove(+id);
  }
  ```
