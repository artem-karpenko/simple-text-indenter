const { Transform } = require('stream');

class IndentBrackets extends Transform {
    constructor(options) {
        super(options);

        this.INDENT_SIZE = 3;
        this.level = 0;
    }

    _openIndent() {
        this.level++;
        return this._currentIndent();
    }

    _closeIndent() {
        this.level--;

        return this._currentIndent();
    }

    _currentIndent() {
        return ' '.repeat(this.level * this.INDENT_SIZE);
    }

    _transform(chunk, encoding, callback) {
        let text = chunk;
        if (encoding == 'buffer') {
            text = chunk.toString('utf-8');
        }

        let indented = text.split('').map(c => {
            if (c == '(' || c == '[' || c == '{') {
                c += '\n' + this._openIndent();
            } else if (c == ')' || c == ']' || c == '}') {
                c = '\n' + this._closeIndent() + c + '\n' + this._currentIndent();
            }
            return c;
        }).join('');

        callback(null, indented);
    }
}

module.exports = IndentBrackets;