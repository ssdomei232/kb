# GPT-Sovits

## Linux

推荐使用 miniforge:

1. `conda create --name GSV python=3.12`
2. `conda activate GSV`
3. `pip install -r requirements.txt`

在 linux 上运行 GPT-Sovits ，需要安装一些必要的依赖

1. 安装 MECAB 开发库: `sudo apt install libmecab-dev mecab`
2. 重新安装 `python_mecab_ko`: `pip uninstall python_mecab_ko && pip install python_mecab_ko`
3. 安装 opencc: `pip install opencc-python-reimplemented`
4. 安装 NTLK资源(用于输出英语):

```python
import nltk
nltk.download('averaged_perceptron_tagger_eng')
```
