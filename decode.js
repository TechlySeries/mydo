-- -
-- -





self.addEventListener('message', (e) => {
    self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/math.min.js" | relative_url }}');
    self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/utils.js" | relative_url }}');

    let source = e.data.source;
    const packer = e.data.packer;
    const options = e.data.options;

    const methods = {
        evalencode: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/evaldecode.js" | relative_url }}');
            return EvalDecode(source);
        },
        _numberencode: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/numberdecode.js" | relative_url }}');
            return _NumberDecode(source);
        },
        arrayencode: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/arraydecode.js" | relative_url }}');
            return ArrayDecode(source, options);
        },
        jsfuck: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/jsfuckdecode.js" | relative_url }}');
            return JSFuckDecode(source);
        },
        obfuscatorio: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/obfuscaterio.js" | relative_url }}');
            return ObfuscatorIO(source, options);
        },
        cleansource: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/cleansource.js" | relative_url }}');
            return CleanSource(source, options);
        },
        aaencode: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/aadecode.js" | relative_url }}');
            return AADecode.decode(source);
        },
        jjencode: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/jjdecode.js" | relative_url }}');
            return JJdecode.decode(source);
        },
        urlencode: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/urlencode_unpacker.js" | relative_url }}');
            if (Urlencoded.detect(source)) return Urlencoded.unpack(source);
            throw 'Not matched';
        },
        p_a_c_k_e_r: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/p_a_c_k_e_r_unpacker.js" | relative_url }}');
            if (P_A_C_K_E_R.detect(source)) return P_A_C_K_E_R.unpack(source);
            throw 'Not matched';
        },
        javascriptobfuscator: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/javascriptobfuscator_unpacker.js" | relative_url }}');
            if (JavascriptObfuscator.detect(source)) return JavascriptObfuscator.unpack(source);
            throw 'Not matched';
        },
        myobfuscate: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/myobfuscate_unpacker.js" | relative_url }}');
            if (MyObfuscate.detect(source)) return MyObfuscate.unpack(source);
            throw 'Not matched';
        },
        wiseeval: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/unpacker.js" | relative_url }}');
            return Wise_EvalDecode(source);
        },
        wisefunction: () => {
            self.importScripts('{{ "https://cdn.jsdelivr.net/gh/TechlySeries/mydo/unpacker.js" | relative_url }}');
            return Wise_FunctionalDecode(source);
        },
    };

    try {
        source = methods[packer]();
    } catch (err) {
        throw new Error(err);
    }

    self.postMessage(source);
});
