window.HSK1_DATA = {
  lessons: [
    {
      id: 1,
      title: "第1课 大家好",
      subtitle: "Chào hỏi trong lớp học",
      summary: "Làm quen với cách chào hỏi cơ bản, xưng hô với giáo viên và bạn học trong buổi học đầu tiên.",
      goals: ["Chào hỏi tự nhiên", "Nhận biết từ xưng hô số nhiều", "Đọc và đóng vai hội thoại ngắn"],
      vocab: [
        { hanzi: "大家", pinyin: "dàjiā", meaning: "mọi người", note: "Dùng trong lời chào chung: 大家好。" },
        { hanzi: "老师", pinyin: "lǎoshī", meaning: "giáo viên", note: "Có thể gọi theo họ: 王老师。" },
        { hanzi: "学生", pinyin: "xuéshēng", meaning: "học sinh", note: "Mở rộng: 大学生, 中学生。" },
        { hanzi: "你们", pinyin: "nǐmen", meaning: "các bạn", note: "Đại từ số nhiều." },
        { hanzi: "您好", pinyin: "nínhǎo", meaning: "xin chào (lịch sự)", note: "Dùng với giáo viên hoặc người lớn tuổi." }
      ],
      grammar: [
        { pattern: "X 好", explanation: "Mẫu chào cơ bản trong tiếng Hán.", examples: ["老师好。", "大家好。"] },
        { pattern: "Danh từ / đại từ + 们", explanation: "Biểu thị số nhiều với người.", examples: ["你们", "同学们"] }
      ],
      text: {
        scene: "Ngày đầu nhập học, giáo viên và học viên chào nhau trong lớp.",
        summary: "Bài khóa xoay quanh lời chào đầu buổi, cách gọi giáo viên và phản hồi lễ phép.",
        dialogue: [
          "老师：大家好！",
          "学生们：老师好！",
          "老师：你们好，欢迎来上课。",
          "学生们：谢谢老师！"
        ],
        keyLines: ["大家好！", "老师好！", "您好吗？"],
        questions: ["Ai là người mở đầu lời chào?", "Học viên nên dùng 您好 với ai?"],
        teachingIdeas: ["Cho cả lớp chào đồng thanh rồi chuyển sang chào theo cặp.", "Cho học viên thay thế 老师 bằng tên thật của bạn học để luyện phản xạ."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ còn thiếu: ___ 好！", answer: "大家", tip: "Dùng từ chỉ tập thể." }],
        mcq: [{ question: "Câu nào phù hợp để chào giáo viên?", choices: ["老师好", "你好吗老师们", "学生好老师"], answer: 0 }],
        reorder: [{ prompt: "Sắp xếp thành câu đúng.", tokens: ["老师", "好"], answer: "老师 好" }],
        matching: [{ prompt: "Ghép từ với nghĩa.", pairs: [{ left: "大家", right: "mọi người" }, { left: "老师", right: "giáo viên" }, { left: "学生", right: "học sinh" }] }],
        short: [{ prompt: "Viết một câu chào giáo viên bằng tiếng Trung.", keywords: ["老师好", "您好"], sample: "老师好！" }]
      }
    },
    {
      id: 2,
      title: "第2课 你叫什么名字",
      subtitle: "Hỏi tên và tự giới thiệu",
      summary: "Luyện hỏi tên, trả lời tên và làm quen với trật tự câu cơ bản chủ ngữ - vị ngữ - tân ngữ.",
      goals: ["Hỏi tên lịch sự", "Tự giới thiệu", "Nhớ mẫu câu cơ bản"],
      vocab: [
        { hanzi: "请问", pinyin: "qǐngwèn", meaning: "xin hỏi", note: "Dùng đầu câu để hỏi lịch sự." },
        { hanzi: "叫", pinyin: "jiào", meaning: "tên là, gọi là", note: "Mẫu: 我叫李文。" },
        { hanzi: "什么", pinyin: "shénme", meaning: "gì, cái gì", note: "Dùng trong câu hỏi về thông tin." },
        { hanzi: "名字", pinyin: "míngzi", meaning: "tên", note: "Mẫu: 你叫什么名字？" },
        { hanzi: "我", pinyin: "wǒ", meaning: "tôi", note: "Dùng để tự giới thiệu." }
      ],
      grammar: [
        { pattern: "主语 + 谓语 + 宾语", explanation: "Trật tự cơ bản của câu tiếng Hán.", examples: ["我叫安妮。", "你叫什么名字？"] },
        { pattern: "请问，...", explanation: "Khung mở đầu câu hỏi lịch sự.", examples: ["请问，你叫什么名字？"] }
      ],
      text: {
        scene: "Hai học viên mới làm quen và hỏi tên nhau.",
        summary: "Bài khóa giới thiệu cách đặt câu hỏi tên và phản hồi bằng tên thật.",
        dialogue: [
          "A：请问，你叫什么名字？",
          "B：我叫白家月。你呢？",
          "A：我叫陈天中。",
          "B：很高兴认识你。"
        ],
        keyLines: ["你叫什么名字？", "我叫……", "你呢？"],
        questions: ["Ai hỏi tên trước?", "Sau khi trả lời tên có thể hỏi lại bằng cấu trúc nào?"],
        teachingIdeas: ["Cho học viên đứng lên di chuyển, hỏi tên 3 bạn khác.", "Cho cả lớp thay tên nhân vật bằng tên thật."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 我___李文。", answer: "叫", tip: "Động từ dùng để giới thiệu tên." }],
        mcq: [{ question: "Câu nào dùng để hỏi tên?", choices: ["你是谁", "你叫什么名字", "你几号"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu hỏi đúng.", tokens: ["你", "叫", "什么", "名字"], answer: "你 叫 什么 名字" }],
        matching: [{ prompt: "Ghép câu với chức năng.", pairs: [{ left: "请问", right: "mở đầu lịch sự" }, { left: "名字", right: "thông tin được hỏi" }, { left: "我叫……", right: "trả lời tên" }] }],
        short: [{ prompt: "Trả lời bằng tên của bạn.", keywords: ["我叫"], sample: "我叫 Minh。" }]
      }
    },
    {
      id: 3,
      title: "第3课 她是我的中文老师",
      subtitle: "Quốc tịch, nghề nghiệp và sở hữu",
      summary: "Giới thiệu mẫu câu 是, phủ định 不是 và trợ từ kết cấu 的 để nói về quan hệ sở hữu.",
      goals: ["Dùng câu 是", "Nói quốc tịch và nghề nghiệp", "Biểu đạt sở hữu bằng 的"],
      vocab: [
        { hanzi: "中国", pinyin: "Zhōngguó", meaning: "Trung Quốc", note: "Mở rộng: 中国人。" },
        { hanzi: "法国", pinyin: "Fǎguó", meaning: "Pháp", note: "Mở rộng: 法国人。" },
        { hanzi: "中文", pinyin: "Zhōngwén", meaning: "tiếng Trung", note: "Mẫu: 学中文。" },
        { hanzi: "的", pinyin: "de", meaning: "trợ từ kết cấu", note: "Dùng nối quan hệ sở hữu." },
        { hanzi: "老师", pinyin: "lǎoshī", meaning: "giáo viên", note: "Kết hợp với 中文: 中文老师。" }
      ],
      grammar: [
        { pattern: "A 是 B / A 不是 B", explanation: "Mẫu câu đồng nhất hoặc phân loại.", examples: ["她是老师。", "我不是法国人。"] },
        { pattern: "A 的 B", explanation: "Dùng để chỉ quan hệ sở hữu.", examples: ["我的老师", "她的名字"] }
      ],
      text: {
        scene: "Học viên giới thiệu giáo viên và hỏi quốc tịch của bạn.",
        summary: "Bài khóa giúp người học mô tả ai là ai, ai thuộc về nhóm nào và ai có quan hệ gì với ai.",
        dialogue: [
          "A：她是谁？",
          "B：她是我的中文老师。",
          "A：你是中国人吗？",
          "B：我不是中国人，我是法国人。"
        ],
        keyLines: ["她是我的中文老师。", "我是法国人。", "你是中国人吗？"],
        questions: ["Câu nào dùng để giới thiệu nghề nghiệp?", "Câu nào dùng để hỏi quốc tịch?"],
        teachingIdeas: ["Cho học viên giới thiệu bạn cùng bàn.", "Biến hoạt động thành phỏng vấn nhanh về quốc tịch và nghề nghiệp."]
      },
      exercises: {
        fill: [{ prompt: "Điền trợ từ thích hợp: 我___老师。", answer: "的", tip: "Dùng để nối sở hữu." }],
        mcq: [{ question: "Câu phủ định của 我是中国人 là gì?", choices: ["我没中国人", "我不是中国人", "我不中国人"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu đúng.", tokens: ["她", "是", "我的", "中文", "老师"], answer: "她 是 我的 中文 老师" }],
        matching: [{ prompt: "Ghép từ với ý nghĩa.", pairs: [{ left: "中国", right: "Trung Quốc" }, { left: "法国", right: "Pháp" }, { left: "中文", right: "tiếng Trung" }] }],
        short: [{ prompt: "Viết một câu dùng 是 để giới thiệu ai đó.", keywords: ["是"], sample: "她是我的朋友。" }]
      }
    },
    {
      id: 4,
      title: "第4课 她有几个孩子",
      subtitle: "Gia đình và số lượng",
      summary: "Triển khai mẫu 有 / 没有, lượng từ cơ bản và cách hỏi về thành viên gia đình.",
      goals: ["Hỏi số lượng người trong gia đình", "Dùng 有 / 没有", "Luyện lượng từ thông dụng"],
      vocab: [
        { hanzi: "有", pinyin: "yǒu", meaning: "có", note: "Biểu thị sở hữu hoặc tồn tại." },
        { hanzi: "多少", pinyin: "duōshao", meaning: "bao nhiêu", note: "Dùng hỏi số lượng." },
        { hanzi: "个", pinyin: "gè", meaning: "lượng từ phổ thông", note: "Dùng sau số từ." },
        { hanzi: "孩子", pinyin: "háizi", meaning: "đứa trẻ, con", note: "Mẫu: 两个孩子。" },
        { hanzi: "口", pinyin: "kǒu", meaning: "khẩu", note: "Dùng cho số người trong gia đình." }
      ],
      grammar: [
        { pattern: "有 / 没有", explanation: "Biểu đạt có hoặc không có.", examples: ["我有姐姐。", "我没有哥哥。"] },
        { pattern: "数词 + 量词 + 名词", explanation: "Cấu trúc số lượng cơ bản.", examples: ["两个孩子", "四口人"] }
      ],
      text: {
        scene: "Hai người trò chuyện về gia đình trong giờ nghỉ.",
        summary: "Bài khóa giúp học viên mô tả gia đình, số con và tuổi của các thành viên.",
        dialogue: [
          "A：你家有几口人？",
          "B：我家有四口人。",
          "A：你有几个孩子？",
          "B：我有两个孩子。"
        ],
        keyLines: ["你家有几口人？", "我有两个孩子。", "我没有姐姐。"],
        questions: ["Cách hỏi số người trong gia đình là gì?", "Lượng từ nào hay dùng với người?"],
        teachingIdeas: ["Cho học viên vẽ sơ đồ gia đình rồi thuyết trình.", "Luyện hỏi đáp theo cặp bằng số liệu thật hoặc giả định."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 她___两个哥哥。", answer: "有", tip: "Động từ chỉ sở hữu." }],
        mcq: [{ question: "Câu nào đúng?", choices: ["我有四口人家", "我家有四口人", "我四口人有家"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu hỏi.", tokens: ["你", "有", "几个", "孩子"], answer: "你 有 几个 孩子" }],
        matching: [{ prompt: "Ghép mẫu đúng.", pairs: [{ left: "四口", right: "người trong gia đình" }, { left: "两个", right: "trẻ em / đồ vật với 个" }, { left: "没有", right: "phủ định của 有" }] }],
        short: [{ prompt: "Viết một câu giới thiệu gia đình bạn.", keywords: ["我家有", "口人"], sample: "我家有五口人。" }]
      }
    },
    {
      id: 5,
      title: "第5课 今天几号",
      subtitle: "Ngày tháng, thứ và khả năng",
      summary: "Luyện cách hỏi ngày tháng, thứ trong tuần và dùng 会 để diễn đạt kỹ năng.",
      goals: ["Hỏi ngày và thứ", "Nói lịch sinh hoạt", "Nói kỹ năng đã học được"],
      vocab: [
        { hanzi: "号", pinyin: "hào", meaning: "ngày", note: "Cách nói ngày theo khẩu ngữ." },
        { hanzi: "星期", pinyin: "xīngqī", meaning: "thứ, tuần", note: "Mở rộng: 星期天 / 星期日。" },
        { hanzi: "休息", pinyin: "xiūxi", meaning: "nghỉ ngơi", note: "Mẫu: 星期天我休息。" },
        { hanzi: "会", pinyin: "huì", meaning: "biết, có thể", note: "Dùng cho kỹ năng học được." },
        { hanzi: "做饭", pinyin: "zuòfàn", meaning: "nấu cơm", note: "Thường đi với 会." }
      ],
      grammar: [
        { pattern: "今天几号？", explanation: "Câu hỏi ngày tháng.", examples: ["今天五月一号。"] },
        { pattern: "会 + 动词", explanation: "Biểu thị biết làm hoặc có khả năng làm.", examples: ["我会做饭。", "我不会开车。"] }
      ],
      text: {
        scene: "Hai đồng nghiệp trò chuyện về ngày nghỉ và việc nấu ăn.",
        summary: "Bài khóa gắn lịch thời gian với kỹ năng sinh hoạt hằng ngày.",
        dialogue: [
          "A：今天几号？",
          "B：今天五月一号，星期天。",
          "A：你会做饭吗？",
          "B：我会做面条儿。"
        ],
        keyLines: ["今天几号？", "今天星期几？", "你会做饭吗？"],
        questions: ["Làm thế nào để nói cả ngày và thứ trong một câu?", "会 khác 能 ở điểm nào trong bài này?"],
        teachingIdeas: ["Bắt đầu buổi học bằng lịch thật của ngày hôm đó.", "Cho học viên nói 3 việc mình biết làm."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 我___做面条儿。", answer: "会", tip: "Động từ tình thái chỉ kỹ năng." }],
        mcq: [{ question: "Câu nào hỏi thứ trong tuần?", choices: ["今天几号", "今天星期几", "今天几点"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu hỏi ngày tháng.", tokens: ["今天", "几号"], answer: "今天 几号" }],
        matching: [{ prompt: "Ghép đúng.", pairs: [{ left: "号", right: "ngày" }, { left: "星期", right: "thứ / tuần" }, { left: "会", right: "biết làm" }] }],
        short: [{ prompt: "Viết một câu nói kỹ năng của bạn bằng 会.", keywords: ["我会"], sample: "我会说一点儿中文。" }]
      }
    },
    {
      id: 6,
      title: "第6课 你的电话号码是多少",
      subtitle: "Thông tin liên hệ",
      summary: "Học cách hỏi số điện thoại, đọc dãy số và xử lý tình huống trao đổi thông tin liên hệ.",
      goals: ["Hỏi thông tin liên hệ", "Đọc số điện thoại rõ ràng", "Phản xạ giao tiếp sau giờ học"],
      vocab: [
        { hanzi: "手机", pinyin: "shǒujī", meaning: "điện thoại di động", note: "Mở rộng: 手机号。" },
        { hanzi: "电话", pinyin: "diànhuà", meaning: "điện thoại, cuộc gọi", note: "Động tác liên quan: 打电话。" },
        { hanzi: "号码", pinyin: "hàomǎ", meaning: "số", note: "Dùng trong số điện thoại, số phòng." },
        { hanzi: "多少", pinyin: "duōshao", meaning: "bao nhiêu", note: "Dùng để hỏi số cụ thể." },
        { hanzi: "下课", pinyin: "xiàkè", meaning: "tan học", note: "Ngữ cảnh hẹn liên lạc." }
      ],
      grammar: [
        { pattern: "你的电话号码是多少？", explanation: "Mẫu hỏi số điện thoại.", examples: ["我的电话号码是……"] },
        { pattern: "Đọc số theo nhịp", explanation: "Nên ngắt nhóm số để nghe rõ hơn.", examples: ["138-0000-0000"] }
      ],
      text: {
        scene: "Hai bạn học trao đổi số điện thoại sau giờ học.",
        summary: "Bài khóa tạo tình huống giao tiếp thực tế về liên hệ lại sau buổi học.",
        dialogue: [
          "A：你的电话号码是多少？",
          "B：我的电话号码是138……",
          "A：好，下课后我给你打电话。",
          "B：好。"
        ],
        keyLines: ["你的电话号码是多少？", "我给你打电话。"],
        questions: ["Khi cần liên hệ lại, người học thường dùng câu nào?", "Có thể thay 电话号码 bằng từ nào trong khẩu ngữ hiện đại?"],
        teachingIdeas: ["Dùng số giả lập thay vì số thật.", "Cho học viên nghe - chép số theo cặp."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 你的___号码是多少？", answer: "电话", tip: "Cụm đầy đủ là 电话号码。" }],
        mcq: [{ question: "Câu nào dùng để hỏi số điện thoại?", choices: ["你在哪儿", "你的电话号码是多少", "你几号上课"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu hỏi đúng.", tokens: ["你的", "电话号码", "是", "多少"], answer: "你的 电话号码 是 多少" }],
        matching: [{ prompt: "Ghép từ với nghĩa.", pairs: [{ left: "手机", right: "điện thoại di động" }, { left: "号码", right: "số" }, { left: "打电话", right: "gọi điện" }] }],
        short: [{ prompt: "Viết một câu hẹn liên hệ lại sau giờ học.", keywords: ["下课", "打电话"], sample: "下课后我给你打电话。" }]
      }
    },
    {
      id: 7,
      title: "第7课 现在几点",
      subtitle: "Giờ giấc và lịch sinh hoạt",
      summary: "Luyện nói giờ, buổi trong ngày và đề xuất kế hoạch bằng trợ từ 吧.",
      goals: ["Nói giờ chính xác", "Nói thời điểm trong ngày", "Đề xuất hoạt động"],
      vocab: [
        { hanzi: "分", pinyin: "fēn", meaning: "phút", note: "Mẫu: 三点十分。" },
        { hanzi: "上午", pinyin: "shàngwǔ", meaning: "buổi sáng", note: "Dùng trước giờ cụ thể." },
        { hanzi: "下午", pinyin: "xiàwǔ", meaning: "buổi chiều", note: "Mẫu: 下午四点。" },
        { hanzi: "晚上", pinyin: "wǎnshang", meaning: "buổi tối", note: "Dùng khi nói lịch tối." },
        { hanzi: "吧", pinyin: "ba", meaning: "nhé, nhé nào", note: "Thường dùng để đề nghị." }
      ],
      grammar: [
        { pattern: "……点……分", explanation: "Mẫu nói giờ cơ bản.", examples: ["现在三点十分。"] },
        { pattern: "……吧", explanation: "Đề nghị, khuyên, rủ.", examples: ["我们休息一下吧。"] }
      ],
      text: {
        scene: "Các bạn bàn lịch gặp nhau vào buổi chiều.",
        summary: "Bài khóa giúp kết hợp giờ với hoạt động thực tế như đi siêu thị, xem phim, tan làm.",
        dialogue: [
          "A：现在几点？",
          "B：现在三点十分。",
          "A：我们下午去超市吧。",
          "B：好，我五点下班。"
        ],
        keyLines: ["现在几点？", "我五点下班。", "我们去……吧。"],
        questions: ["Câu nào dùng để rủ rê?", "Người nói tan làm lúc mấy giờ?"],
        teachingIdeas: ["Cho học viên lập thời khóa biểu một ngày.", "Kết hợp tranh đồng hồ để luyện nghe - nói."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 现在三点十___。", answer: "分", tip: "Đơn vị chỉ phút." }],
        mcq: [{ question: "Từ nào dùng để đề nghị?", choices: ["呢", "吧", "吗"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu đề nghị.", tokens: ["我们", "去", "超市", "吧"], answer: "我们 去 超市 吧" }],
        matching: [{ prompt: "Ghép thời đoạn.", pairs: [{ left: "上午", right: "buổi sáng" }, { left: "下午", right: "buổi chiều" }, { left: "晚上", right: "buổi tối" }] }],
        short: [{ prompt: "Viết một câu nói giờ học của bạn.", keywords: ["点"], sample: "我下午两点上课。" }]
      }
    },
    {
      id: 8,
      title: "第8课 小猫在哪儿",
      subtitle: "Phương vị và địa điểm",
      summary: "Phát triển từ chỉ vị trí, giới từ 在 và động từ năng 能 trong tình huống hẹn gặp, tìm đồ vật.",
      goals: ["Hỏi vị trí", "Mô tả nơi diễn ra hành động", "Nói có thể / không thể"],
      vocab: [
        { hanzi: "小猫", pinyin: "xiǎomāo", meaning: "mèo con", note: "Mẫu: 我有一只小猫。" },
        { hanzi: "在哪儿", pinyin: "zài nǎr", meaning: "ở đâu", note: "Câu hỏi vị trí thông dụng." },
        { hanzi: "在", pinyin: "zài", meaning: "ở, tại", note: "Dùng làm giới từ hoặc động từ vị trí." },
        { hanzi: "能", pinyin: "néng", meaning: "có thể", note: "Biểu thị điều kiện, khả năng." },
        { hanzi: "前", pinyin: "qián", meaning: "phía trước", note: "Mở rộng: 前边, 前面。" }
      ],
      grammar: [
        { pattern: "在 + địa điểm + 动词", explanation: "Biểu thị nơi diễn ra hành động.", examples: ["我在学校吃午饭。"] },
        { pattern: "方位词", explanation: "Từ phương vị dùng để xác định vị trí.", examples: ["书店前", "房间里"] }
      ],
      text: {
        scene: "Tìm mèo con và hẹn gặp nhau trước hiệu sách.",
        summary: "Bài khóa nối giữa việc hỏi vị trí đồ vật và hẹn địa điểm gặp mặt.",
        dialogue: [
          "A：小猫在哪儿？",
          "B：在房间里。",
          "A：下午两点你能到吗？",
          "B：能，我们在书店前见。"
        ],
        keyLines: ["小猫在哪儿？", "在房间里。", "你能到吗？"],
        questions: ["Câu nào hỏi vị trí?", "Giới từ 在 đứng ở đâu trong cấu trúc?"],
        teachingIdeas: ["Giấu đồ vật trong lớp để luyện phản xạ hỏi - đáp.", "Kết hợp với bài 7 để thêm yếu tố giờ gặp."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 我___学校吃午饭。", answer: "在", tip: "Giới từ chỉ địa điểm." }],
        mcq: [{ question: "Câu nào hỏi vị trí?", choices: ["你叫什么名字", "你在哪儿", "今天几号"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu hỏi vị trí.", tokens: ["小猫", "在", "哪儿"], answer: "小猫 在 哪儿" }],
        matching: [{ prompt: "Ghép từ phương vị.", pairs: [{ left: "里", right: "bên trong" }, { left: "前", right: "phía trước" }, { left: "外", right: "bên ngoài" }] }],
        short: [{ prompt: "Viết một câu nói bạn có thể đến lúc 2 giờ.", keywords: ["能"], sample: "我下午两点能到。" }]
      }
    },
    {
      id: 9,
      title: "第9课 椅子上有一本书",
      subtitle: "Câu tồn tại và thứ tự",
      summary: "Luyện cách diễn đạt sự tồn tại bằng 有, kết hợp vị trí và cấu trúc 第 để nói thứ tự.",
      goals: ["Mô tả vật ở đâu", "Hỏi đồ vật của ai", "Nói thứ tự thứ nhất, thứ hai"],
      vocab: [
        { hanzi: "椅子", pinyin: "yǐzi", meaning: "cái ghế", note: "Ngữ cảnh tồn tại đồ vật." },
        { hanzi: "上", pinyin: "shàng", meaning: "trên", note: "Dùng với danh từ vị trí." },
        { hanzi: "一本书", pinyin: "yì běn shū", meaning: "một quyển sách", note: "Luyện lượng từ 本." },
        { hanzi: "第", pinyin: "dì", meaning: "thứ", note: "Mẫu: 第一, 第二。" },
        { hanzi: "那个", pinyin: "nàge", meaning: "cái đó, người đó", note: "Chỉ định ở xa người nói." }
      ],
      grammar: [
        { pattern: "处所 + 有 + 人/物", explanation: "Mẫu câu tồn tại cơ bản.", examples: ["椅子上有一本书。"] },
        { pattern: "第 + 数词", explanation: "Biểu thị thứ tự.", examples: ["第一本书", "第二个学生"] }
      ],
      text: {
        scene: "Trong lớp có sách và điện thoại đặt ở nhiều vị trí khác nhau.",
        summary: "Bài khóa dùng không gian lớp học để luyện mô tả vị trí và nhận diện đồ vật.",
        dialogue: [
          "A：椅子上有什么？",
          "B：椅子上有一本书。",
          "A：这是第几本书？",
          "B：这是第一本书。"
        ],
        keyLines: ["椅子上有一本书。", "这是第一本书。"],
        questions: ["Lượng từ nào dùng cho sách?", "第 đứng ở đâu trong cụm thứ tự?"],
        teachingIdeas: ["Cho học viên nhìn ảnh lớp học rồi mô tả.", "Dùng thẻ số thứ tự để học viên phản xạ nhanh."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 桌子上___一本书。", answer: "有", tip: "Động từ tồn tại." }],
        mcq: [{ question: "Lượng từ nào đi với 书?", choices: ["个", "本", "只"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu đúng.", tokens: ["椅子", "上", "有", "一本", "书"], answer: "椅子 上 有 一本 书" }],
        matching: [{ prompt: "Ghép cụm đúng.", pairs: [{ left: "第一", right: "thứ nhất" }, { left: "第二", right: "thứ hai" }, { left: "一本", right: "một quyển" }] }],
        short: [{ prompt: "Viết một câu tồn tại về đồ vật trong lớp.", keywords: ["有"], sample: "桌子上有一个手机。" }]
      }
    },
    {
      id: 10,
      title: "第10课 这个苹果多少钱",
      subtitle: "Giá cả và mua sắm",
      summary: "Phát triển hội thoại mua bán, hỏi giá, nói tiền và xin ý kiến về đồ vật, món ăn.",
      goals: ["Hỏi giá", "Nói số tiền", "Đóng vai người bán - người mua"],
      vocab: [
        { hanzi: "多少钱", pinyin: "duōshao qián", meaning: "bao nhiêu tiền", note: "Cụm hỏi giá trực tiếp." },
        { hanzi: "块", pinyin: "kuài", meaning: "đồng, tệ", note: "Đơn vị khẩu ngữ của 元." },
        { hanzi: "这些", pinyin: "zhèxiē", meaning: "những cái này", note: "Chỉ nhiều vật ở gần." },
        { hanzi: "那些", pinyin: "nàxiē", meaning: "những cái kia", note: "Chỉ nhiều vật ở xa." },
        { hanzi: "售货员", pinyin: "shòuhuòyuán", meaning: "nhân viên bán hàng", note: "Vai trò thường dùng khi đóng vai." }
      ],
      grammar: [
        { pattern: "……多少钱？", explanation: "Mẫu hỏi giá phổ biến.", examples: ["这个苹果多少钱？"] },
        { pattern: "怎么样", explanation: "Dùng hỏi ý kiến hoặc đánh giá.", examples: ["这个杯子怎么样？"] }
      ],
      text: {
        scene: "Khách hỏi giá trái cây và quần áo trong cửa hàng.",
        summary: "Bài khóa đưa người học vào hai tình huống đi chợ và mua đồ trong trung tâm thương mại.",
        dialogue: [
          "顾客：这个苹果多少钱一斤？",
          "售货员：三块五一斤。",
          "顾客：这件衣服怎么样？",
          "售货员：很好看，也不贵。"
        ],
        keyLines: ["多少钱？", "三块五一斤。", "怎么样？"],
        questions: ["Khi nào dùng 多少钱?", "怎么样 thường đi sau danh từ hay động từ trong bài này?"],
        teachingIdeas: ["Dùng thẻ giá và đồ vật thật/ảnh.", "Cho học viên tự đặt cửa hàng mini trong lớp."]
      },
      exercises: {
        fill: [{ prompt: "Điền vào chỗ trống: 这个苹果多___钱？", answer: "少", tip: "Hoàn chỉnh thành 多少钱。" }],
        mcq: [{ question: "Ba块五 nghĩa là bao nhiêu?", choices: ["3.5 tệ", "35 tệ", "53 tệ"], answer: 0 }],
        reorder: [{ prompt: "Sắp câu hỏi giá.", tokens: ["这个", "苹果", "多少钱"], answer: "这个 苹果 多少钱" }],
        matching: [{ prompt: "Ghép từ với nghĩa.", pairs: [{ left: "块", right: "đơn vị tiền khẩu ngữ" }, { left: "这些", right: "những cái này" }, { left: "售货员", right: "người bán hàng" }] }],
        short: [{ prompt: "Viết một câu hỏi giá và một câu trả lời ngắn.", keywords: ["多少钱", "块"], sample: "这个杯子多少钱？十块。" }]
      }
    },
    {
      id: 11,
      title: "第11课 弟弟正在睡觉呢",
      subtitle: "Hành động đang diễn ra",
      summary: "Trọng tâm là 在 / 正在 / 呢, câu hỏi chính phản và động từ tình thái 要 để nói dự định.",
      goals: ["Mô tả hành động đang diễn ra", "Đặt câu hỏi chính phản", "Nói dự định gần"],
      vocab: [
        { hanzi: "正在", pinyin: "zhèngzài", meaning: "đang", note: "Thường đứng trước động từ." },
        { hanzi: "睡觉", pinyin: "shuìjiào", meaning: "ngủ", note: "Li hợp từ phổ biến." },
        { hanzi: "找", pinyin: "zhǎo", meaning: "tìm", note: "Mẫu: 找东西。" },
        { hanzi: "开车", pinyin: "kāichē", meaning: "lái xe", note: "Mẫu: 我不会开车。" },
        { hanzi: "要", pinyin: "yào", meaning: "muốn, định", note: "Nói kế hoạch gần." }
      ],
      grammar: [
        { pattern: "在 / 正在 + 动词 (+ 呢)", explanation: "Biểu thị hành động đang tiếp diễn.", examples: ["弟弟正在睡觉呢。"] },
        { pattern: "V 不 V", explanation: "Câu hỏi chính phản.", examples: ["你去不去学校？"] }
      ],
      text: {
        scene: "Buổi sáng cuối tuần, bố hỏi con gái về em trai đang làm gì.",
        summary: "Bài khóa giúp người học mô tả trạng thái đang diễn ra và hỏi kế hoạch trong ngày.",
        dialogue: [
          "爸爸：弟弟在做什么？",
          "姐姐：弟弟正在睡觉呢。",
          "爸爸：他今天去不去超市？",
          "姐姐：去，他还要和小朋友玩。"
        ],
        keyLines: ["弟弟正在睡觉呢。", "你去不去超市？", "他今天要……"],
        questions: ["Từ nào nhấn mạnh trạng thái đang diễn ra?", "Câu hỏi chính phản được tạo thế nào?"],
        teachingIdeas: ["Cho học viên nhìn tranh động tác rồi mô tả bằng 正在.", "Biến phần cuối thành nói kế hoạch cuối tuần."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 弟弟___在睡觉呢。", answer: "正", tip: "Ghép với 在 thành 正在。" }],
        mcq: [{ question: "Câu nào là câu hỏi chính phản?", choices: ["你去学校吗", "你去不去学校", "你去学校呢"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu đúng.", tokens: ["弟弟", "正在", "睡觉", "呢"], answer: "弟弟 正在 睡觉 呢" }],
        matching: [{ prompt: "Ghép cấu trúc với chức năng.", pairs: [{ left: "正在 + 动词", right: "hành động đang diễn ra" }, { left: "V 不 V", right: "hỏi chính phản" }, { left: "要 + 动词", right: "dự định" }] }],
        short: [{ prompt: "Viết một câu mô tả ai đó đang làm gì.", keywords: ["正在", "呢"], sample: "妈妈正在做饭呢。" }]
      }
    },
    {
      id: 12,
      title: "第12课 下雨了",
      subtitle: "Thời tiết và thay đổi trạng thái",
      summary: "Luyện câu phi chủ vị, trợ từ ngữ khí 了 và cấu trúc cảm thán 太……了.",
      goals: ["Nói thời tiết", "Nói sự thay đổi", "Phản xạ trong ngữ cảnh đi khám bệnh"],
      vocab: [
        { hanzi: "下雨", pinyin: "xiàyǔ", meaning: "mưa", note: "Mẫu: 下雨了。" },
        { hanzi: "觉得", pinyin: "juéde", meaning: "cảm thấy", note: "Dùng cho cảm nhận chủ quan." },
        { hanzi: "有点儿", pinyin: "yǒudiǎnr", meaning: "hơi", note: "Hay đi với tính từ." },
        { hanzi: "生病", pinyin: "shēngbìng", meaning: "bị ốm", note: "Ngữ cảnh khám bệnh." },
        { hanzi: "休息", pinyin: "xiūxi", meaning: "nghỉ ngơi", note: "Lời khuyên phổ biến của bác sĩ." }
      ],
      grammar: [
        { pattern: "……了", explanation: "Biểu thị thay đổi hoặc tình huống mới.", examples: ["下雨了。", "他生病了。"] },
        { pattern: "太……了", explanation: "Biểu thị mức độ rất cao.", examples: ["太冷了！"] }
      ],
      text: {
        scene: "Trời mưa, thời tiết lạnh và một người bị ốm phải đi khám.",
        summary: "Bài khóa gắn miêu tả thời tiết với lời khuyên trong tình huống sức khỏe.",
        dialogue: [
          "A：外边下雨了。",
          "B：今天有点儿冷。",
          "A：你怎么了？",
          "B：我生病了，医生说休息半天吧。"
        ],
        keyLines: ["下雨了。", "今天有点儿冷。", "太冷了！"],
        questions: ["了 trong 下雨了 có nghĩa gì trong ngữ cảnh này?", "Khi nào dùng 太……了?"],
        teachingIdeas: ["Cho học viên xem biểu tượng thời tiết và nói cảm nhận.", "Đóng vai bác sĩ - bệnh nhân."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 下雨___。", answer: "了", tip: "Trợ từ báo thay đổi." }],
        mcq: [{ question: "Câu nào diễn tả mức độ rất cao?", choices: ["有点儿冷", "太冷了", "不冷"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu cảm thán.", tokens: ["太", "冷", "了"], answer: "太 冷 了" }],
        matching: [{ prompt: "Ghép từ với tình huống.", pairs: [{ left: "下雨", right: "thời tiết" }, { left: "生病", right: "sức khỏe" }, { left: "休息", right: "lời khuyên" }] }],
        short: [{ prompt: "Viết một câu nói thời tiết hôm nay.", keywords: ["今天", "冷", "热", "下雨"], sample: "今天有点儿冷。" }]
      }
    },
    {
      id: 13,
      title: "第13课 我可以问一下吗",
      subtitle: "Xin phép và gọi món",
      summary: "Mở rộng cách xin phép, hỏi nhanh bằng 一下 và dùng câu song tân ngữ với 给 / 问.",
      goals: ["Xin phép lịch sự", "Đặt câu hỏi ngắn gọn", "Gọi món trong nhà hàng"],
      vocab: [
        { hanzi: "可以", pinyin: "kěyǐ", meaning: "có thể, được phép", note: "Dùng để xin phép và cho phép." },
        { hanzi: "问题", pinyin: "wèntí", meaning: "câu hỏi, vấn đề", note: "Mẫu: 我有一个问题。" },
        { hanzi: "一下", pinyin: "yíxià", meaning: "một chút, thử một lần", note: "Làm câu nói nhẹ hơn." },
        { hanzi: "给", pinyin: "gěi", meaning: "đưa, cho", note: "Dùng trong câu hai tân ngữ." },
        { hanzi: "牛奶", pinyin: "niúnǎi", meaning: "sữa", note: "Ngữ cảnh gọi đồ uống." }
      ],
      grammar: [
        { pattern: "可以 + 动词", explanation: "Biểu thị được phép hoặc có thể.", examples: ["我可以问一下吗？"] },
        { pattern: "给 / 问 + 人 + 物 / 事", explanation: "Câu song tân ngữ cơ bản.", examples: ["请给我一杯牛奶。"] }
      ],
      text: {
        scene: "Học viên hỏi giáo viên thêm một câu và sau đó gọi món trong quán ăn.",
        summary: "Bài khóa nối giao tiếp lớp học với giao tiếp dịch vụ hàng ngày.",
        dialogue: [
          "A：老师，我可以问一下吗？",
          "B：可以，你问吧。",
          "A：请给我一杯牛奶，还要一份面包。",
          "B：好的。"
        ],
        keyLines: ["我可以问一下吗？", "请给我一杯牛奶。", "你问吧。"],
        questions: ["一下 làm giảm sắc thái của động từ như thế nào?", "Câu song tân ngữ trong bài là câu nào?"],
        teachingIdeas: ["Cho học viên viết 3 câu xin phép khác nhau.", "Làm menu giả để luyện gọi món."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 我___问一下吗？", answer: "可以", tip: "Động từ tình thái xin phép." }],
        mcq: [{ question: "Câu nào là câu song tân ngữ?", choices: ["我喝牛奶", "请给我一杯牛奶", "我可以吗"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu lịch sự.", tokens: ["我", "可以", "问", "一下", "吗"], answer: "我 可以 问 一下 吗" }],
        matching: [{ prompt: "Ghép từ với chức năng.", pairs: [{ left: "可以", right: "xin phép / cho phép" }, { left: "一下", right: "làm nhẹ câu nói" }, { left: "给", right: "đưa / cho" }] }],
        short: [{ prompt: "Viết một câu gọi đồ uống.", keywords: ["请给我"], sample: "请给我一杯茶。" }]
      }
    },
    {
      id: 14,
      title: "第14课 我看见王老师了",
      subtitle: "Hoàn thành hành động và 都",
      summary: "Tập trung vào động thái trợ từ 了, li hợp từ quen thuộc và phó từ phạm vi 都.",
      goals: ["Nói việc đã xảy ra", "Nhận diện li hợp từ", "Dùng 都 để tổng hợp"],
      vocab: [
        { hanzi: "看见", pinyin: "kànjiàn", meaning: "nhìn thấy", note: "Phủ định: 没看见。" },
        { hanzi: "开", pinyin: "kāi", meaning: "khởi hành, chạy", note: "Mẫu: 火车开了。" },
        { hanzi: "有些", pinyin: "yǒuxiē", meaning: "một số", note: "Biểu thị một phần." },
        { hanzi: "有的", pinyin: "yǒude", meaning: "có người/có cái", note: "Mẫu song hành: 有的……有的……" },
        { hanzi: "都", pinyin: "dōu", meaning: "đều", note: "Tổng hợp phạm vi." }
      ],
      grammar: [
        { pattern: "动词 + 了", explanation: "Biểu thị hành động đã xảy ra hoặc hoàn thành.", examples: ["我看见王老师了。"] },
        { pattern: "都", explanation: "Tổng hợp tất cả đối tượng phía trước.", examples: ["同学们都听见了。"] }
      ],
      text: {
        scene: "Trên tàu xe, mọi người nói về những gì đã thấy và đã nghe.",
        summary: "Bài khóa giúp người học kể lại hành động vừa xảy ra và tổng kết trạng thái của cả nhóm.",
        dialogue: [
          "A：你看见王老师了吗？",
          "B：我看见王老师了。",
          "A：同学们都听见了吗？",
          "B：都听见了。"
        ],
        keyLines: ["我看见王老师了。", "同学们都听见了。"],
        questions: ["了 ở đây khác gì với 了 trong 下雨了?", "Đối tượng được tổng hợp đứng trước hay sau 都?"],
        teachingIdeas: ["Cho học viên kể 3 việc vừa làm xong.", "Luyện 有的……有的…… bằng tranh đám đông."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 我看见王老师___。", answer: "了", tip: "Báo hiệu hành động đã xảy ra." }],
        mcq: [{ question: "Trong câu 我们都来了, 都 nhấn mạnh gì?", choices: ["địa điểm", "toàn bộ chủ thể", "thời gian"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu đúng.", tokens: ["我们", "都", "会", "写", "了"], answer: "我们 都 会 写 了" }],
        matching: [{ prompt: "Ghép từ với chức năng.", pairs: [{ left: "了", right: "đã xảy ra / hoàn thành" }, { left: "都", right: "tổng hợp" }, { left: "有的", right: "một phần trong nhóm" }] }],
        short: [{ prompt: "Viết một câu có 都.", keywords: ["都"], sample: "我们都很忙。" }]
      }
    },
    {
      id: 15,
      title: "第15课 你爱吃哪个菜",
      subtitle: "Sở thích, lựa chọn và kế hoạch đi lại",
      summary: "Kết nối hỏi sở thích với lựa chọn cụ thể, đồng thời dùng 也 / 还 để mở rộng thông tin song song.",
      goals: ["Hỏi món yêu thích", "Chọn trong nhiều phương án", "Nói thêm thông tin song song"],
      vocab: [
        { hanzi: "爱", pinyin: "ài", meaning: "thích, yêu", note: "Mạnh hơn 喜欢 trong sắc thái." },
        { hanzi: "哪个", pinyin: "nǎge", meaning: "cái nào", note: "Dùng để chọn một trong nhiều phương án." },
        { hanzi: "也", pinyin: "yě", meaning: "cũng", note: "Bổ sung thông tin song song." },
        { hanzi: "还", pinyin: "hái", meaning: "còn, thêm", note: "Bổ sung thêm một nội dung nữa." },
        { hanzi: "机场", pinyin: "jīchǎng", meaning: "sân bay", note: "Ngữ cảnh đi Bắc Kinh, đón người." }
      ],
      grammar: [
        { pattern: "……，也 / 还 ……", explanation: "Biểu thị thông tin song song hoặc bổ sung.", examples: ["她会做饭，也会做菜。"] },
        { pattern: "哪个 + 名词", explanation: "Hỏi lựa chọn cụ thể.", examples: ["哪个菜", "哪个手机"] }
      ],
      text: {
        scene: "Mọi người ăn cơm cùng nhau và bàn chuyện đi du lịch / đón người ở sân bay.",
        summary: "Bài khóa kết hợp giao tiếp bàn ăn với trao đổi kế hoạch di chuyển.",
        dialogue: [
          "A：你爱吃哪个菜？",
          "B：我爱吃饺子，也爱吃面条儿。",
          "A：你们怎么去北京？",
          "B：我们坐飞机去，北京的朋友还来机场接我们。"
        ],
        keyLines: ["你爱吃哪个菜？", "我也爱吃……", "我们坐飞机去……"],
        questions: ["也 và 还 khác nhau thế nào trong phần bài khóa này?", "哪个 đứng ở vị trí nào trong câu hỏi lựa chọn?"],
        teachingIdeas: ["Dùng menu món ăn để học viên hỏi đáp.", "Cho nhóm lập kế hoạch một chuyến đi ngắn."]
      },
      exercises: {
        fill: [{ prompt: "Điền từ: 你爱吃___个菜？", answer: "哪", tip: "Ghép với 个 thành 哪个。" }],
        mcq: [{ question: "Câu nào hỏi lựa chọn?", choices: ["你爱吃什么", "你爱吃哪个菜", "你吃了吗"], answer: 1 }],
        reorder: [{ prompt: "Sắp câu hỏi đúng.", tokens: ["你", "爱", "吃", "哪个", "菜"], answer: "你 爱 吃 哪个 菜" }],
        matching: [{ prompt: "Ghép từ với chức năng.", pairs: [{ left: "爱", right: "thích / yêu" }, { left: "也", right: "cũng" }, { left: "还", right: "còn / thêm" }] }],
        short: [{ prompt: "Viết một câu nói món bạn thích bằng 爱 hoặc 喜欢.", keywords: ["爱吃", "喜欢吃"], sample: "我爱吃饺子。" }]
      }
    }
  ]
};

window.HSK1_DATA.source = {
  pdfPath: "/Users/imyunu/Documents/HSK/Giáo trình chuẩn 3.0/HSK1/新HSK教程1.pdf",
  note: "PDF gốc hiện là dạng scan; phần nguyên bản cần OCR chính xác hoặc nhập tay để bảo toàn nội dung."
};
