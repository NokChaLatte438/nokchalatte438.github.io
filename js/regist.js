window.onload = function () {
  const ssn1 = document.getElementById("ssn1");
  ssn1.addEventListener("keyup", () => {
    if (ssn1.value.length >= 6) {
      document.getElementById("ssn2").focus();
    }
  });

  const ssn = document.querySelectorAll(".ssn");
  ssn.forEach((s) => {
    s.addEventListener("input", () => {
      document.getElementById("ssncheck").value = "n";
    });
  });
};

function checkssn() {
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");
  const ssn = ssn1.value + ssn2.value;
  const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let result = 0;

  for (let i = 0; i < weights.length; i++) {
    result += parseInt(ssn[i] * weights[i]);
  }
  result = 11 - ((result % 11) % 10);

  if (result == parseInt(ssn[12])) {
    alert("유효한 주민등록번호입니다.");
    document.getElementById("ssncheck").value = "y";
  } else {
    alert("유호하지 않은 주민등록번호입니다.");
  }
}

function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");
  const email = document.getElementById("email");
  const ssncheck = document.getElementById("ssncheck");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A_Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}/;
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const expSsn1Txt = /^\d{6}/;
  const expSsn2Txt = /^\d{7}/;
  const expEmailTxt = /^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-]+\./;

  const arr1 = expSsn1Txt.toString().split("").map(Number);
  const arr2 = expSsn2Txt.toString().split("").map(Number);

  if (userid.value === "") {
    alert("아이디를 입력해주세요.");
    userid.focus();
    return false;
  }
  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자 이상 20자 이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  if (!expPwText.test(userpw, value)) {
    alert(
      "비밀번호는 8자 이상 20자 이하의 영문자, 숫자, 특수기호를 한 자 이상 포함해야 합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호가 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요");
    name.focus();
    return false;
  }

  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호의 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력해주세요");
    hp.focus();
    return false;
  }

  if (!expEmailTxt.test(email.value)) {
    alert("이메일 형식이 올바르지 않습니다.");
    email.focus();
    return false;
  }

  if (ssncheck.value == "n") {
    alert("주민등록번호 검증 버튼을 눌러주세요");
    return false;
  }

  return true;
}
