# Seoulful — แอปลงเวลาและเงินเดือนพนักงาน

เว็บของแอป Seoulful Staff บน GitHub Pages

- แอปพนักงาน: https://baszpsk.github.io/seoulful/ (ไอคอนจิ้งจอกทองบนพื้นเข้ม ชื่อ "Seoulful")
- หน้าเจ้าของร้าน: https://baszpsk.github.io/seoulful/owner.html (ไอคอนจิ้งจอกทองบนพื้นครีม ชื่อ "เจ้าของร้าน")

หน้าเว็บนี้คุยกับระบบหลังบ้านบน Google Apps Script ข้อมูลทั้งหมดอยู่ใน Google Sheet ของร้าน ไม่มีข้อมูลพนักงานเก็บไว้ที่นี่ และทุกคนต้องใส่ PIN

ไฟล์ใน repo นี้สร้างอัตโนมัติจาก repo ของร้าน (`payroll/src/App.html` และ `payroll/site`) ด้วยคำสั่ง `node payroll/dev/publish-site.js` อย่าแก้ไฟล์ที่นี่โดยตรง
