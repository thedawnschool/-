const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ⭐ غيّر الرابط حسب حالتك (محلية أو Atlas)
mongoose.connect('mongodb://127.0.0.1:27017/myLoginDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 🧠 نموذج الطالب
const Student = mongoose.model('Student', {
  name: String,
  studentID: String,
  password: String
});

// ✅ إنشاء حساب
app.post('/register', async (req, res) => {
  const { name, studentID, password } = req.body;
  const exists = await Student.findOne({ studentID });
  if (exists) return res.status(400).json({ msg: 'رقم الطالب مستخدم' });

  const student = new Student({ name, studentID, password });
  await student.save();
  res.json({ msg: 'تم إنشاء الحساب' });
});

// ✅ تسجيل الدخول
app.post('/login', async (req, res) => {
  const { studentID, password } = req.body;
  const user = await Student.findOne({ studentID, password });
  if (!user) return res.status(401).json({ msg: 'بيانات غير صحيحة' });

  res.json({ msg: 'تم الدخول بنجاح', name: user.name });
});

app.listen(3000, () => {
  console.log('✅ السيرفر يعمل على http://localhost:3000');
});
