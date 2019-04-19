/ * *
Este arquivo combinado foi criado pelo construtor DataTables Downloader:
    *
    https: //datatables.net/download
    *
    *
    Para reconstruir ou modificar este arquivo com as versões mais recentes do
        *software por favor visite:
        *
        https: //datatables.net/download/#dt/dt-1.10.18
        *
        *
        Bibliotecas incluídas:
        *
        DataTables 1.10 .18 *
        /

        /
        * !
        DataTables 1.10 .18© 2008 - 2018 SpryMedia Ltd - datatables.net / license *
        /
        (function (h) {
            "function" === typeof define && define.amd ? define(["jquery"], função(E) {
                retorno h(E, janela, documento)
            }) : "objeto" === tipo de exportação ? module.exports = function (E, H) {
                E || (E = janela);
                H || (H = "indefinido"! == tipo de janela ? require("jquery") : require("jquery")(E));
                retorno h(H, E, E.document)
            } : h(jQuery, janela, documento)
        })(função(h, E, H, k) {
                função Z(a) {
                    var b, c, d = {};
                    h.each(a, função(e) {
                        if ((b = e.match(/ ^ ([^ AZ] +?) ([AZ]) /)) && -1! == " a aa ai ao como b fn imos ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                            d[c] = e, "o" === b[1] && Z(a[e])
                    });
                    a._hungarianMap = d
                }
                função J(a, b, c) {
                    a._hungarianMap || Z(a);
                    var d;
                    h.each(b, função(e) {
                            d = a._hungarianMap[e];
                            se(d! == k && (c || b[d] === k))
                            "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extenda(!0, b[d], b[e]), J(a[d]], b[d], c)): b[d] = b[e]
                    })
            }
            função Ca(a) {
                var b = n.defaults.olanguage,
                    c = b.sDecimal;
                c && Da(c);
                se(a) {
                    var d = a.sZeroRecords;
                    !a.sEmptyTable && (d && "Nenhum dado disponível na tabela" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
                    !a.sLoadingRecords && (d && "Carregando ..." === b.sLoadingRecords) && F(a,
                        a, "sZeroRecords", "sLoadingRecords");
                    a.sInfoThousands && (a.sThousands = a.sInfoThousands);
                    (a = a.sDecimal) && c! == a && Da(a)
                }
            }
            função eb(a) {
                A(a, "ordenação", "bSort");
                A(a, "orderMulti", "bSortMulti");
                A(a, "orderClasses", "bSortClasses");
                A(a, "orderCellsTop", "bSortCellsTop");
                (a, "order", "aaSorting");
                A(a, "orderFixed", "aaSortingFixed");
                A(a, "paging", "bPaginate");
                A(a, "pagingType", "sPaginationType");
                A(a, "pageLength", "iDisplayLength");
                A(a, "pesquisa", "bFilter");
                "booleano" === tipoof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
                    "");
                "booleano" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
                if (a = a.aoSearchCols) para(var b = 0, c = a(b) && J(n.models.oSearch, a[b])
                }
                função fb(a) {
                    A(a, "ordenável", "bSortable");
                    A(a, a)
                    "orderData", "aDataSort");
                A(a, "orderSequence", "asSorting");
                A(a, "orderDataType", "sortDataType");
                var b = a.aDataSort;
                "número" === typeof b && !h.isArray(b) && (a.aDataSort = [b])
            }
            função gb(a) {
                if (!n navegador do.__) {
                    var b = {};
                    n.__ navegador = b;
                    var c = h(" <div /> ").css({
                            position: " fixed ",
                            top: 0,
                            esquerda: -1 * h(E).scrollLeft(),
                            altura: 1,
                            largura: 1,
                            estouro: "oculto"
                        }).append(h("<div />").css({
                            position: "absoluto",
                            top: 1,
                            left: 1,
                            largura: 100,
                            overflow: "scroll"
                        }).(h("<div />").css({
                            largura: "100%",
                            altura: 10
                        }))).appendTo("corpo"),
                        d = c.crianças(),
                        e = d.crianças();
                    b.barWidth = d[0].offsetWidth - d[0].clientWidth;
                    !b.bScrollOversize = 100 === e[0].offsetWidth && 100 == d[0].clientWidth;
                    b.bScrollbarLeft = 1! == Math.round(e.offset().Left);
                    b.bBounding = c[0].getBoundingClientRect().Largura ? !0 : !1;
                    c.remove()
                }
                h.extend(a.oBrowser, n.__ browser);
                a.oScroll.iBarWidth = n.__ browser.barWidth
            }
            função hb(a, b, c, d, e, f) {
                varg,
                j = !1;c! == k && (g = c, j = !0);para(; d! == e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d + = f);retorno g
            }
            função Ea(a, b) {
                var c = n.defaults.coluna,
                    d = a.aoColumns.length,
                    c = h.extend({}, n.models.oColumn, c, {
                        nTh: b ? b : H.createElement("th"),
                        sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                        aDataSort: c.aDataSort ? c.aDataSort : [d],
                        m Dados: c.mData ? c.mData : d,
                        idx: d
                    });
                a.aoColumns.push(c);
                c = a.aoPreSearchCols;
                c[d] = h.extend({}, n.models.oSearch, c[d]);
                ka(a, d, h(b).data())
            }
            ka função(a, b, c) {
                var b = a.aoColumns[b],
                    d = a.oClasses,
                    e = h(b.nTh);
                if (!b.SWidthOrig) {
                    b.sWidthOrig = e.attr("largura") || null;
                    var f = (e.attr("estilo") || "").match(/ largura: \ s * (\ d + [pxem%] +) /);
                    f && (b.sWidthOrig = f[1])
                }
                c! == k && nulo! == c && (fb(c), J(n.defaults.coluna, c), c.mDataProp! == k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort! == k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort")),
                    var = b.mData, j = S(g), i = b.mRender ?
                    S(b.mRender) : null, c = função(a) {
                        return "string" === typeof a && -1! == a.indexOf("@")
                    };
                b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
                b._setter = null;
                b.fnGetData = função(a, b, c) {
                    var d = j(a, b, k, c);
                    retorno i && b ? i(d, b, a, c) : d
                };
                b.fnSetData = função(a, b, c) {
                    retorno N(g)(a, b, c)
                };
                "number"! == typeof g && (a._rowReadObject = !0);
                a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
                a = -1! == h.inArray("asc", b.asSorting);
                c = -1! == h.inArray("desc", b.asSorting);
                b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone,
                    b.sSortingClassJUI = "") : a && !c ? (b.sClassificação = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sClassificaçãoClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
            }
            função $(a) {
                if (!1! == a.oFeatures.bAutoWidth) {
                    var b = a.aoColumns;
                    Fa(a);
                    para(var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
                }
                b = a.oScroll;
                (""! == b.sY || ""! == b.sX) && la(a);
                r(a, nulo, "tamanho da coluna", [a])
            }
            função aa(a, b) {
                var c = ma(a, "bVisible");
                return "number" ===
                    typeof c[b] ? c[b] : null
            }
            função ba(a, b) {
                var c = ma(a, "bVisible"),
                    c = h.inArray(b, c);
                retorno - 1! == c ? c : null
            }
            função V(a) {
                var b = 0;
                h.each(a.aoColumns, função(a, d) {
                    d.bVisible && "none"! == h(d.nTh).css("display") && b++
                });
                return b
            }
            função ma(a, b) {
                var c = [];
                h.map(a.aoColunas, função(a, e) {
                    a[b] && c.push(e)
                });
                retorno c
            }
            função Ga(a) {
                var b = a.aoColunas,
                    c = a.aoData,
                    d = n.ext.type.detect,
                    e, f, g, j, i, h, l, q, t;
                e = 0;
                para(f = b.length; e < f; e++) if (l = b[e], t = [], l.sType && l._sManualType) l.sType = l._sManualType;
                    else if (!l.sType) {
                    g = 0;
                    para(j = d.length; g <
                        j; g++) {
                        i = 0;
                        para(h = c.length; i < h; i++) {
                            t[i] === k && (t[i] = B(a, i, e, "tipo"));
                            q = d[g](t[i], a);
                            if (!q && g! == d.length - 1) quebra;
                            if ("html" === q) quebra
                        }
                        se(q) {
                            l.sType = q;
                            quebra
                        }
                    }
                    l.sTipo || (l.sType = "string")
                }
            }
            função ib(a, b, c, d) {
                var e, f, g, j, i, m, l = a.aoColumns;
                if (b) para(e = b.length - 1; 0 <= e; e - ) {
                    m = b[e];
                    var q = m.targets! == k ? m.targets : m.aTargets;
                    h.isArray(q) || (q = [q]);
                    f = 0;
                    para(g = q.length; f < g; f++) if ("número" === typeof q[f] && 0 <= q[f])​​ {
                        para(; l.length <= q[f];) Ea(a);
                        d(q[f], m)
                    } else if ("número" === typeof q[f] && 0 > q[f])​​ d(l.length + q[f], m);
                    else if ("string" ===
                        typeof q[f])​​ {
                        j = 0;
                        para(i = l.length; j < i; j++)("_ todos" == q[f] || h(l[j].nTh).hasClass(q[f])) && d(j, m)
                    }
                }
                se(c) {
                    e = 0;
                    para(a = c.length; e < a; e++) d(e, c[e])
                }
            }
            funo O(a, b, c, d) {
                var e = a.aoData.length,
                    f = h.extend(!0, {}, n.models.oRow, {
                        src: c ? "dom" : "data",
                        idx: e
                    });
                f._aData = b;
                a.aoData.push(f);
                para(var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sTYPE = nulo;
                a.aiDisplayMaster.push(e);
                b = a.rowIdFn(b);
                !b == k && (a.aIds[b] = f);
                (c || a.oFeatures.bDeferRender!) && Ha(a, e, c, d);
                return e
            }

            function na(a, b) {
                var a;
                b instanceof h || (b = h(b));
                return b.map(funç˜ ao(b,
                    e) {
                    c = Ia(a, e);
                    retorno O(a, c.data, e, c.cells)
                })
            }
            função B(a, b, c, d) {
                var e = a.iDraw,
                    f = a.aoColumns[c],
                    g = a.aoData[b].aData,
                    j = f.sDefaultContent,
                    i = f.fnGetData(g, d, {
                        configurações: a,
                        linha: b,
                        col: c
                    });
                if (i === k) return a.iDrawError! = e && null === j && (K(a, 0, "Parâmetro desconhecido solicitado" + ("function" == typeof f.mData ? "{function}" : " '" + f.mData + "' ") + " para linha " + b + ", coluna " + c, 4), a.iDrawError = e), j;
                if ((i === g || null === i) && null! == j && d! == k) i = j;
                else if ("função" === tipoof i) retorna i.call(g);
                retorno nulo === i && "exibir" == d ? " " : i
            }

            function jb(a,
                b, c, d) {
                a.aoColumns[c].fnSetData(a.aoData[b]._ aData, d, {
                    configuração: a,
                    linha: b,
                    col: c
                })
            }
            função Ja(a) {
                return h.map(a.match(/ (\\. | [^ \.]) + /
                    g) || [""], função(a) {
                    return a.replace(/\\\./g, ". ")
                })
            }
            função S(a) {
                if (h.isPlainObject(a)) {
                    var b = {};
                    h.each(a, função(a, c) {
                            c && (b[a] = S(c))
                        }; função de retorno(a, c, f, g) {
                            var j = b[c] || b._;
                            retorno j! == k ? j(a, c, f, g) : a
                        }
                    }
                    if (null === a) função
                    return (a) {
                        return a
                    };
                    if ("função" === typeof a) função
                    return (b, c, f, g) {
                        retorno a(b, c, f, g)
                    };
                    if ("string" === typeof a && (-1! == a.indexOf(".") || -1! == a.indexOf("[") ||
                            -1! == a.indexOf("("))) {
                        var = função(a, b, f) {
                            var g, j;
                            if (""! == f) {
                                j = Ja(f);
                                para(var i = 0, m = j.length; i < m; i++) {
                                    f = j[i].match(ca);
                                    g = j[i].match(W);
                                    if (f) {
                                        j[i] = j[i].replace(ca, "");
                                        ""! == j[i] && (a = a[j[i]]);
                                        g = [];
                                        j.splice(0, i + 1);
                                        j = j.join(".");
                                        if (h.isArray(a)) {
                                            i = 0;
                                            para(m = a.length; i < m; i++) g.push(c(a[i], b, j))
                                        }
                                        a = f[0].substring(1, f[0].length - 1);
                                        a = "" === a ? g : g.join(a);
                                        break
                                    } else if (g) {
                                        j[i] = j[i].substituir(W, "");
                                        a = a[j[i]]();
                                        continuar
                                    }
                                    se(null === a || a[j[i]] === k) retornar k;
                                    a = a[j[i]]
                                }
                            }
                            retornar a
                        };
                        return function (b, e) {
                            retorno c(b, e, a)
                        }
                    }
                    função de retorno(b) {
                        retorno b[a]
                    }
                }
                função N(a) {
                    se(h.isPlainObject(a)) retornar N(a._);
                    if (null === a) função de retorno() {};
                    if ("função" === typeof a) return função(b, d, e) {
                        a(b, "conjunto", d, e)
                    };
                    if ("string" === typeof a && (-1! == a.indexOf(".") || -1! == a.indexOf("[") || -1! == a.indexOf("("))) {
                        var b = função(a, d, e) {
                            var e = Ja(e),
                                f;
                            f = e[e.length - 1];
                            para(var g, j, i = 0, m = e.length - 1; i < m; i++) {
                                g = e[i].match(ca);
                                j = e[i].match(W);
                                se(g) {
                                    e[i] = e[i].replace(ca, "");
                                    a[e[i]] = [];
                                    f = e.slice();
                                    f.splice(0, i + 1);
                                    g = f.join(".");
                                    if (h.isArray(d)) {
                                        j = 0;
                                        para(m = d.length; j < m; j++) f = {}, b(f, d[j], g),
                                            a[e[i]] push(f)
                                    }
                                    senão a[e[i]] = d;
                                    return
                                }
                                j && (e[i] = e[i].replace(W, ""), a = a[e[i]](d));
                                se(null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
                                a = a[e[i]]
                            }
                            se(f.match(W)) a[f.replace(W, "")](d);
                            caso contrário, um[f.replace(ca, "")] = d
                        };
                        função de retorno(c, d) {
                            retorno b(c, d, a)
                        }
                    }
                    função de retorno(b, d) {
                        b[a] = d
                    }
                }
                função Ka(a) {
                    retorno D(a.aoData, "_ aData ")
                }

                function oa(a) {
                    a.aoData.length = 0;
                    a.aiDisplayMaster.length = 0;
                    a.aiDisplay.length = 0;
                    a.aIds = {}
                }
                função pa(a, b, c) {
                    para(var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e] - ; - 1! = D && c === k && a.splice(d,
                        1)
                }
                função da(a, b, c, d) {
                    var e = a.aoData[b],
                        f, g = função(c, d) {
                            para(; c.childNodes.length;) c.removeChild(c.firstChild);
                            c.innerHTML = B(a, b, d, "display")
                        };
                    if ("dom" === c || (!c || "auto" === c) && "dom " === e.src) e._aData = Ia(a, e, d, d === k ? k : e._aData).data;
                    mais {
                        var j = e.anCells;
                        se(j) se(d! == k) g(j[d], d);
                        senão {
                            c = 0;
                            para(f = j.length; c < f; c++) g(j[c], c)
                        }
                    }
                    e._aSortData = null;
                    e._aFilterData = null;
                    g = a.aoColumns;
                    se(d! == k) g[d].sType = null;
                    em outro caso {
                        c = 0;
                        para(f = g.length; c < f; c++) g[c].sType = null;
                        Função La(a, e)
                    }
                }
                Ia(a, b, c, d) {
                    var e = [],
                        f = b.firstChild,
                        g,
                        j, i = 0,
                        m, l = a.aoColunas,
                        q = a._rowReadObject,
                        d = d! == k ? d : q ? {} : [],
                        t = função(a, b) {
                            if (" string " === typeof a) {
                                var c = a.indexOf(" @ "); - 1! == c && (c = a.substring(c + 1), N(a)(d, b.getAttribute(c)))
                            }
                        },
                        G = função(a) {
                            se(c === k || c === i) j = l[i], m = h.trim(a.innerHTML), j && j._bAttrSrc(N(j.mData._)(d, m), t(j.mData.sort, a), t(j.mData.type, a), t(j.mData.filter, a)): q(j._setter || (j._setter = N(j.mData)), j._setter(d, m)): d[i] = m;
                            i++
                        };
                    if (f) para(; f;) {
                        g = f.nodeName.toUpperCase();
                        if ("TD" == g || "TH" == g) G(f), e.push(f);
                        f = f.nextSibling
                    } else {
                        e = b.anCells;
                        f = 0;
                        para(g = e.length; f < g; f++) G(e[f])
                    }
                    se(b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && N(a.rowId)(d, b);
                    retorno {
                        dados: d,
                        células: e
                    }
                }
                função Ha(a, b, c, d) {
                    var e = a.aoData[b],
                        f = e._aData,
                        g = [],
                        j, i, m, l, q;
                    if (null === e.nTr) {
                        j = c || H.createElement("tr");
                        e.nTr = j;
                        e.anCells = g;
                        j._DT_RowIndex = b;
                        La(a, e);
                        l = 0;
                        para(q = a.aoColumns.length; l < q; l++) {
                                m = a.aoColumns[l];
                                i = c.d[l]: H.createElement(m.sCellType);
                                i._DT_CellIndex = {
                                    linha: b,
                                    coluna: l
                                };
                                g.push(i);
                                if ((!c || m.mRender || m).mData! == l) && (!h.isPlainObject(m.mData) || m.mData._! == l + ". display")) i.innerHTML =
                            B(a, b, l, "display");
                        m.sClass && (i.className + = "" + m.sClass);
                        m.bVisible && !C ? J.appendChild(i) : !M.bVisible && c && i.parentNode.removeChild(i);
                        m.fnCreatedCell && m.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
                    }
                    r(a, "aoRowCreatedCallback", null, [j, f, b, g])
                }
                e.nTr.setAttribute(função "role", "row")
            }
            La(a, b) {
                var = b.nTr, d = b._aData;
                if (c) {
                    var e = a.rowIdFn(d);
                    e && (c.id = e);
                    d.DT_RowClass && (e = d.DT_RowClass.split(""), b.__ rowc = b.__ rowc ? qa(b.__ rowc.concat(e)) : e, h(c).removeClass(b.__ rowc.join("")).addClass(d.DT_RowClass));
                    d.DT_RowAttr & h(c).attr(d.DT_RowAttr);
                    d.DT_RowData & h(c).data(d.DT_RowData)
                }
            }
            função kb(a) {
                var b, c, d, e, f, g = a.nTHead,
                    j = a.nTFoot,
                    i = 0 === h("th, td", g).length,
                    m = a.oClasses,
                    l = a.aoColumns;
                i && (e = h("<tr /> ").appendTo(g));
                b = 0;
                para(c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sClassificaçãoClasse), !1! == f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls ", a.sTableId), Ma(a, f.nTh, b))), f.sTitle! = d[0].innerHTML && d.html(f.sTitle), Na(a, " cabeçalho ")(a, d f, m);
                i && ea(a.aoHeader, g);
                h(g).find("> tr").attr("role", "row");
                h(g).find("> tr> th ,> tr> td ").addClass(m.sHeaderTH);
                h(j).find("> tr> th,> tr> td ").addClass(m.sFooterTH);
                if (null! == j) {
                    a = a.aoFooter[0];
                    b = 0;
                    para(c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
                }
            }
            função fa(a, b, c) {
                var d, e, f, g = [],
                    j = [],
                    i = a.aoColumns.length,
                    m;
                if (b) {
                    c === k && (c = !1);
                    d = 0;
                    para(e = b.length; d < e; d++) {
                        g[d] = b[d].slice();
                        g[d].nTr = b[d].nTr;
                        para(f = i - 1; 0 <= f; f - ) !a.aoColumns[f].BVisible && !c && g[d].splice(f, 1);
                        j.push([])
                    }
                    d =
                        0;
                    para(e = g.length; d < e; d++) {
                        if (a = g[d].nTr) para(; f = a.firstChild;) a.removeChild(f);
                        f = 0;
                        (b = g[d].length; f < b; f++) if (m = i = 1, j[d][f] === k) {
                            a.appendChild(g[d][f].cell) para(j[d][f] = 1; g[d + i] ! == k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
                            para(; g[d][f + m] ! == k && g[d][f].celelo == g[d][f + m].cell;) {
                                para(c = 0; c < i; c++) j[d + c][f + m] = 1;
                                m++
                            }
                            h(g[d][f].cell).attr("rowspan", i).attr("colspan", m)
                        }
                    }
                }
            }
            função P(a) {
                var b = r(a, "aoPreDrawCallback", "preDraw", [a]);
                if (-1! == h.inArray(!1, b)) C(a, !1);
                senão {
                    var b = [],
                        c = 0,
                        d = a.asStripeClasses,
                        e =
                        d.length,
                        f = a.oLanguage,
                        g = a.iInitDisplayStart,
                        j = "ssp" == y(a),
                        i = a.aiDisplay;
                    a.bDrawing = !0;
                    g! == k && -1! = = g && (a._iDisplayStart = j ? g : g > = a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
                    var g = a._iDisplayStart,
                        m = a.fnDisplayEnd();
                    se(a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
                    senão se(j) {
                        if (!a.bDestroying && !lb(a)) return
                    }
                    mais a.iDraw++;
                    if (0! = = i.length) {
                        f = j ? a.aoData.length : m;
                        para(j = j ? 0 : g; j < f; j++) {
                            var l = i[j],
                                q = a.aoData[l];
                            null === q.nTr && Ha(a, l);
                            var t = q.nTr;
                            se(0! == e) {
                                var.G = d[c % e];
                                q._sRowStripe! = G && (h(t).removeClass(q._sRowStripe).addClass(G),
                                    q._sRowStripe = G)
                            }
                            r(a, "aoRowCallback", nulo, [t, q._aData, c, j, l]);
                            b.push(t);
                            c++
                        }
                    }
                    mais c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("< tr /> ", {
                        " class ": e ? d[0] : " "
                    }).append(h(" <td /> ", {
                        valign: " topo ",
                        colSpan: V(a),
                        " classe ": a.oClasses.sRowEmpty
                    }).html(c))[0];
                    r(a, "aoHeaderCallback", "cabeçalho", [h(a.nTHead).children("tr")[0], Ka(a), g, m, i]);
                    r(a, "aoFooterCallback", "footer", [h(a.nToot).children("tr")[0], Ka(a), g, m, i]);
                    d = h(a.nBody) d.children().dessach();
                    Função d.append(h(b));
                    r(a, "aoDrawCallback", "draw", [a]);
                    a.bSorted = !1;
                    a.bFiltered = !1;
                    a.bDrawing = !1
                }
            }
            T(a, b) {
                var c = a.oCaracterísticas,
                    d = c.bFilter;
                c.bSort && mb(a);
                d ? Ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
                !0! == b && (a._iDisplayStart = 0);
                a._drawHold = b;
                P(a);
                a._drawHold = !1
            }
            função nb(a) {
                var b = a.oClasses,
                    c = h(a.nTable),
                    c = h("<div />").insertBefore(c),
                    d = a.oCaracterísticas,
                    e = h("<div />", {
                        id: a.sTableId + "_ wrapper",
                        "class ": b.sWrapper + (a.nTFoot ? " " : " " + b.sNoFooter)
                    });
                a.nHolding = c[0];
                a.nTableWrapper = e[0];
                a.nTableReinsertBefore =
                    a.nTable.nextSibling;
                para(var f = a.sDom.split(""), g, j, i, m, l, q, k = 0; k < f.length; k++) {
                    g = nulo;
                    j = f[k];
                    se("<" == j) {
                        i = h("<div />")[0];
                        m = f[k + 1];
                        se("'" == m | | '' == m) {
                            l = "";
                            para(q = 2; f[k + q] ! = m;) l + = f[k + q], q++;
                            "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1! = l.indexOf(".") ? (m = l.split("."), i.id = m[0].substr(1, m[0].length - 1), i.className = m[1]) : "#" == l.charAt(0) ? I.id = l.substr(1, l.length - 1) : i.className = l;
                            k + = q
                        }
                        e.append(i);
                        e = h(i)
                    } else if (">" == j) e = e.parent();
                    ("l" == j && d.bPaginate && d.bLengthChange) g = ob(a);
                    else if ("f" == j &&
                        d.bFilter) g = pb(a);
                    else if ("r" == j && d.bProcessing) g = qb(a);
                    caso contrário, se("t" == j) g = rb(a);
                    "i" == j && d.bInfo) g = sb(a);
                else if ("p" == j && d.bPaginado) g = tb(a);
                else if (0! == n.ext.feature.length) {
                    i = n.ext.feature;
                    q = 0;
                    para(m = i.length; q < m; q++) se(j == i[q].cFeature) {
                        g = i[q].fnInit(a);
                        break
                    }
                }
                g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g)
                }
            }
            c.replaceWith(e); a.nHolding = null
        }

    function
    ea(a, b) {
        var c = h(b).crianças("tr"),
            d, e, f, g, j, i, m, l, q, k;
        a.splice(0, a.length);
        f = 0;
        para(i = c.length; f < i; f++) a.push([]);
        f = 0;
        para(i = c.comprimento; i; f++) {
            d = c[f];
            para(e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    para(j = a[f]; j[g];) g++;
                    m = g;
                    k = 1 === l ? !0 : !1;
                    para(j = 0; j < l; j++) para(g = 0; g < q; g++) a[f + g][m + j] = {
                        cell: e,
                        unique: k
                    }, a[f + g].nTr = d
                }
                e = e.nextSibling
            }
        }
    }
função ra(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], ea(c, b)));
    para(var b = 0, e = c.length; b < e; b++) para(var f = 0, g = c[b].length; f < g; f++) if (c[b][f].unique && (!d[f] ||
            !a.bSortCellsTop)) d[f] = c[b][f].cell;
    retorno d
}
função sa(a, b, c) {
    r(a, "aoServerParams", "serverParams", [b]);
    if (b && h.isArray(b)) {
        var d = {},
            e = / (. *?) \ [\] $ /; h.each (b, funcao (a, b) {var = b. name.match (e); c? (c = c [0], d [c] || (d [c] = []), d [c] .push (b.value)): d [b. name] = b.value}); b = d} var f, g = a.ajax, j = a.oInstance, i = função (b) {r (a, nulo, "xhr", [a, b, a.jqXHR]); c (b)}; if (h.isPlainObject (g) && g.data) {f = g.data; var m = "função" === tipoof f? f (b, a): f, b = "função" === typeof f && m? m: h.extend (! 0, b, m); delete g.data} m = {dados: b, sucesso: função (b) {var c =
        b.error || b.sError;
        c && K(a, 0, c);
        a.json = b;
        i(b)
    }, dataType: "json", cache: !1, tipo: a.sServerMethod, erro: function (b, c) {
        var d = r(a, nulo, "xhr", [a, nulo, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" = = c ? K(a, 0, "Resposta JSON inválida", 1) : 4 === b.readyState && K(a, 0, "Erro Ajax", 7));
        C(a, !1)
    }
};.oAjaxData = b;
r(a, nulo, "preXhr", [a, b]);
a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, funo(a, b) {
        return {
            nome: b,
            valor: a
        }
    }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(m, {
        url: g || a.sAjaxSource
    })) :
    "function" === typeof g ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(m, g)), g.data = f)
}

function lb(a) {
    retornar a.bAjaxDataGet ? (a.iDraw++, C(a, !0), sa(a, ub(a), função(b) {
        vb(a, b)
    }) !1) : !0
}
função ub(a) {
    var b = a.aoColunas,
        c = b.length,
        d = a.OFeatures,
        e = a.oPreviousSearch,
        f = a.aoPreSearchCols,
        g, j = [],
        i, m, l, k = X(a);
    g = a._iDisplayStart;
    i = !1! == d.bPaginado ? a._iDisplayLength : -1;
    var t = função(a, b) {
        j.push({
            nome: a,
            valor: b
        })
    };
    t("sEcho", a.iDraw);
    t("iColumns", c);
    t("sColumns", D(b, "sName").join(","));
    t("iDisplayStart", g);
    t("iDisplayLength",
        i);
    var G = {
        desenhar: a.iDraw,
        colunas: [],
        ordem: [],
        início: g,
        comprimento: i,
        pesquisa: {
            valor: e.sSearch,
            regex: e.bRegex
        }
    };
    g = 0;
    g < c;
    g++) m = b[g], l = f[g], i = "função" == tipo de m.mData ? "função" : m.mData, G.columns.push({
    dados: i,
    nome: m.sNome,
    pesquisável: m.b pesquisável,
    ordenável: m.bSortable,
    pesquisa: {
        value: l.sSearch,
        regex: l.bRegex
    }
}), t("mDataProp _" + g, i), d.bFilter && (t("sSearch _" + g, l.sSearch), t("bRegex _" + g, l.bRegex), t("bEscalável _" + g, m.bEscalável)), d.bSort && t("bSortable _" + g, m.bSortable);
d.bFilter && (t("sSearch", e.sSearch), t("bRegex",
    e.bRegex));
d.bSort && (h.each(k, funç˜ ao(a, b) {
    G.order.push({
        coluna: b.col,
        dir: b.dir
    });
    t("iSortCol _" + a, b.col);
    t("sSortDir _" + a, b.dir)
}), t("iSortingCols", k.length));
b = n.ext.legacy.ajax;
retorno null === b ? a.sAjaxSource ? j : G : b ? j : G
}
vb(a, b) {
    var c = ta(a, b),
        d = b.sEcho! == k ? b.sEcho : b.draw,
        e = b.iTotalRecords! == k ? b.iTotalRecords : b.recordsTotal,
        f = b.iTotalDisplayRecords! == k ? b.iTotalDisplayRecords : b.recordsFiltrado;
    if (d) {
        if (1 * d < a.iDraw) return :a.iDraw = 1 * d
    }
    oa(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(f,
        10);
    d = 0;
    para(e = c.length; d < e; d++) O(a, c[d]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    P(a);
    a._bInitComplete || ua(a, b);
    a.bAjaxDataGet = !0;
    C(a, !1)
}
função ta(a, b) {
    var = h.isPlainObject(a.ajax) && a.ajax.dataSrc! == k ? a.ajax.dataSrc : a.sAjaxDataProp;
    retorno "data" === c ? b.aaData || b[c] : ""! == c ? S(c)(b) : b
}
função pb(a) {
    var b = a.oClasses,
        c = a.TableId,
        d = a.oLanguage,
        e = a.oPreviousSearch,
        f = a.aanFeatures,
        g = '<tipo de entrada = "pesquisa" class = "' + b.sFilterInput + '" /> ',
        j = d.sSearch,
        j = j.match(/ _ ENTRADA _ /) ? j.replace("_ INPUT_",
            g) : j + g,
        b = h("<div />", {
            id: !ff ? c + "_ filtro" : null,
            "classe": b.sFiltro
        }).append(h("<label /> ").append(j)),
        f = função() {
            var b = !this.value ? " " : this.value;
            b! = e.sSearch && (ga(a, {
                    sPesquisa: b,
                    bRegex: e.bRegex,
                    bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive
                }), a._iDisplayStart = 0, P(a)
            }
        },
        g = null! == a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
        i = h("entrada", b).val(e.sSearch).attr("espaço reservado", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste .DT cut.DT ", g ? Oa(f, g) : f).On(" keypress.DT ", function (a) {
            if (13 == a.keyCode) retorna!1
        }).Attr(" aria-controls ",
            c);
    h(a.nTable).on("search.dt.DT", função(b, c) {
        if (a === c) tenta {
            i[0] ! == H.activeElement && i.val(e.sSearch)
        } catch (d) {}
    });
    retorno b[0]
}
função ga(a, b, c) {
    var d = a.oPreviousSearch,
        e = a.aoPreSearchCols,
        f = função(a) {
            d.sSearch = a.sSearch;
            d.bRegex = a.bRegex;
            d.bSmart = a.bSmart;
            d.bCaseInsensitive = a.bCaseInsensitive
        };
    Ga(a);
    if ("ssp"! = y(a)) {
        wb(a, b.sPesquisa, c, b.bEscapeRegex! == k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
        f(b);
        para(b = 0; b < e.length; b++) xb(a, e[b].sPesquisar, b, e[b].bEscapeRegex! == k ? !e[b].bEscapeRegex : e[b].BRegex,
            e[b].BSmart, e[b].bCaseInsensitive);
        yb(a)
    }
    mais f(b);
    a.bFiltered = !0;
    r(a, nulo, "pesquisa", [a])
}
função yb(a) {
    para(var b = n.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
        para(var j = [], i = 0, m = c.length; i < m; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
        c.length = 0;
        h.merge(c, j)
    }
}
função xb(a, b, c, d, e, f) {
    se(""! == b) {
        para(var g = [], j = a.aiDisplay, d = Pa(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) & g.push(j[e]);
        a.aiDisplay = g
    }
}
função wb(a, b, c, d, e, f) {
    var d = Pa(b,
            d, e, f),
        f = a.oPreviousSearch.sSearch,
        g = a.aiDisplayMaster,
        j, e = [];
    0! == n.ext.search.length && (c = !0);
    j = zb(a);
    if (0 > = b.length) a.aiDisplay = g.slice();
    senão {
        if (j || c || f.length > b.length || 0! == b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
        b = a.aiDisplay;
        para(c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
        a.aiDisplay = e
    }
}
função Pa(a, b, c, d) {
    a = b ? a : Qa(a);
    c && (a = "^ ( ? =. *? " + h.map(a.match(/" [^ "] +" | [^] + /
                g) || [""], função(a) {
                if ('"' == = a.charAt(0)) var b = a.match(/^"(.*)"$/),
                    a = b ? b[1] : a;
                retorno a.replace('"',
                    join(") (? =. *?") + "). * $");
                return Função RegExp(a, d ? "i" : "")
            }
            zb(a) {
                var b = a.aoColumns,
                    c, d, e, f, g, j, i, h, l = n.ext.type.search;
                c = !1;
                d = 0;
                para(f = a.aoData.length; d < f; d++) if (h = a.aoData[d], h._aFilterData) {
                    j = [];
                    e = 0;
                    para(g = b.length; e < g; e++) c = b[e], c.b Pesquisável(i = B(a, d, e, "filtro"), l[c.setipo] && (i = l[c.sipo](i)), nulo === i && (i = ""), "string"! == typeof i && i.toString && (i = i.toString())): i = "", i.indexOf && -1! == i.indexOf("&") && (va.innerHTML = i, i = Wb ? va.textContent : va.innerText), i.replace && (i = i.replace(/ [\ r \ n] /
                        g, "")), j.push(i);
                    h._aFilterData = j;
                    h._sFilterRow = j.join("");
                    c = !0
                } retorno c
            }

            function Ab(a) {
                retorno {
                    search: a.sSearch,
                    smart: a.bSmart,
                    regex: a.bRegex,
                    caseInsensitive: a.bCaseInsensitive
                }
            }
            função Bb(a) {
                retorno {
                    sSearch: a.search,
                    bSmart: a.smart,
                    bRegex: a.regex,
                    bCaseInsensitive: a.caseInsensitive
                }
            }
            função sb(a) {
                var = a.sTableId, c = a.aanFeatures.i, d = h("<div />", {
                    "classe": a.oClasses.sInfo,
                    id: !c ? b + "_ info" : nulo
                });
                c || (a.aoDrawCallback.push({
                    fn: Cb,
                    sName: "informação"
                }), d.attr("função", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby",
                    b + "_ info"));
                return d[0]
            }
            função Cb(a) {
                var b = a.aanFeatures.i;
                se(0! == b.length) {
                    var c = a.oLanguage,
                        d = a._iDisplayStart + 1,
                        e = a.fnDisplayEnd(),
                        f = a.fnRecordsTotal(),
                        g = a.fnRecordsDisplay(),
                        j = g ? c.sInfo : c.sInfoEmpty;
                    g! = = f && (j + = "" + c.sInfoFiltered);
                    j + = c.sInfoPostFix;
                    j = Db(a, j);
                    c = c.fnInfoCallback;
                    null! == c && (j = c.call(a.oInstance, a, d, e, f, g, j));
                    h(b).html(j)
                }
            }
            função Db(a, b) {
                var c = a.fnFormatNumber,
                    d = a._iDisplayStart + 1,
                    e = a._iDisplayLength,
                    f = a.fnRecordsDisplay(),
                    g = -1 === e;
                return b.replace(/ _ START_ /
                    g, c.call(a, d)).substitua(/ _ END_ /
                    g,
                    c.call(a, a.fnDisplayEnd())).substituir(/ _ MAX_ /
                    g, c.call(a, a.fnRecordsTotal())).substituir(/ _ TOTAL_ /
                    g, c.call(a, f)).replace(/ _ PAGE_ /
                    g, c.call(a, g ? 1 : Math.ceil(d / e))).substitua(/ _ PAGES_ /
                    g, c.call(a, g ? 1 : Math.ceil(f / e)))
            }
            função ha(a) {
                var b, c, d = a.iInitDisplayStart,
                    e = a.aoColumns,
                    f;
                c = a.oCaracterísticas;
                var g = a.bDeferLoading;
                se(a.bInicializado) {
                    nb(a);
                    kb(a);
                    fa(a, a.aoHeader);
                    fa(a, a.aoFooter);
                    C(a, 0);
                    c.bAutoWidth && Fa(a);
                    b = 0;
                    para(c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
                    r(a, null, "preInit", [a]);
                    T(a);
                    e =
                        y(a);
                    if ("ssp"! = e || g) "ajax" == e ? sa(a, [], função(c) {
                        var = ta(a, c);
                        para(b = 0; b < f.length; b++) O(a, f[b]);
                        a.iInitDisplayStart = d;
                        T(a);
                        C(a, !1);
                        ua(a, c)
                    }, a) : (C(a, !1), ua(a))
                }
                mais setTimeout(function () {
                    ha(a)
                }, 200)
            }
            função ua(a, b) {
                a._bInitComplete = !0;
                (b || a.oInit.aaData) && $(a);
                r(a, nulo, "plugin-init", [a, b]);
                r(a, "aoInitComplete", "init", [a, b])
            }
            função Ra(a, b) {
                var c = parseInt(b, 10);
                a._iDisplayLength = c;
                Sa(a);
                r(a, nulo, "comprimento", [a, c])
            }
            função ob(a) {
                para(var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f =
                    e d[0]: d, d = e d[1]: d, e = h("<selecionar />", {
                        nome: c + "_ comprimento",
                        "aria-controles": c,
                        "classe": b.sLengthSelect
                    }), g = 0, j = f.length, g < j; g++) e[0][g] = nova Opção("número" === tipo de d[g] ? a.fnFormatNumber(d[g]) : d[g], f[g]);
                var i = h("<div> <label /> </ div>").addClass(b.sLength);
                a.aanFeatures.l | | (i[0].id = c + "_ length");
                i.children().append(a.oLanguage.sLengthMenu.replace("_ MENU _", e[0].outerHTML));
                h("selecionar", i).val(a._iDisplayLength).on("change.DT", function () {
                    Ra(a, h(isto).val());
                    P(a)
                });
                h(a.nTable).on("length.dt.DT", função(b, c, d) {
                    a ===
                        c && h("select", i).val(d)
                });
                retorno i[0]
            }

            function tb(a) {
                var b = a.sPaginationType,
                    c = n.ext.pager[b],
                    d = "função " === typeof c,
                    e = função(a) {
                        P(a)
                    },
                    b = h(" <div /> ").addClass(a.oClasses.sPaging + b)[0],
                    f = a.aanFeatures;
                d || c.fnInit(a, b, e);
                fp || (b.id = a.TableId + "_ paginar", a.aoDrawCallback.push({
                    fn: function (a) {
                        if (d) {
                            var b = a._iDisplayStart,
                                i = a._iDisplayLength,
                                h = a.fnRecordsDisplay(),
                                l = -1 === i,
                                b = l ? 0 : Math.ceil(b / i),
                                i = l ? 1 : Math.ceil(h / i),
                                h = c(b, i),
                                k, l = 0,
                                para(k = fplength; l < k; l++) Na(a, "pageButton")(a, fp[l], l, h, b, i)
                        }
                        mais c.fnUpdate(a,
                            e)
                    },
                    sName: "paginação"
                }));
                retorno b
            }
            função Ta(a, b, c) {
                var d = a._iDisplayStart,
                    e = a._iDisplayLength,
                    f = a.fnRecordsDisplay();
                0 == = f || -1 === e ? d = 0 : "número" === tipo de b ? (d = b * e, d > f && (d = 0)) : "primeiro" == b ? d = 0 : "anterior" == b ? (D = 0 <= e ? De : 0, 0 > d && (d = 0)) : "próximo" == b ? D + e < f && (d + = e) : " last " == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, " Acção de paginação desconhecida: " + b, 5);
                b = a._iDisplayStart! == d;
                a._iDisplayStart = d;
                b && (r(a, nulo, "página", [a]), c && P(a));
                retorno b
            }
            função qb(a) {
                retorno h("<div />", {
                    id: !a.aanFeatures.r ? a.sTableId + "_ processing" : null,
                    "classe": a.oClasses.sProcessing
                }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
            }
            função C(a, b) {
                a.oFeatures.bProcessing && h(a.aanFeatures.r).css("exibição", b ? "bloco" : "nenhum");
                r(a, nulo, "processamento", [a, b])
            }

            function rb(a) {
                var b = h(a.nTable);
                b.attr("papel", "grid");
                var c = a.oScroll;
                if ("" === c.sX && "" === c.sY) return a.nTable;
                var d = c.sX,
                    e = c.sY,
                    f = a.oClasses,
                    g = b.children("legenda"),
                    j = g.length ? g[0]._ captionSide : null,
                    i = h(b[0].cloneNode(!1)),
                    m = h(b[0].cloneNode(!1)),
                    l = b.children("tfoot ");
                l.length || (l = null);
                i = h(" <div /> ", {
                    " classe ": f.sScrollWrapper
                }).append(h(" <div /> ", {
                    " classe ": f.sScrollHead
                }).css({
                    overflow: " oculto ",
                    position: "relative",
                    border: 0,
                    largura: d ? !d ? null : v(d) : "100%"
                }).append(h("<div />", {
                    "classe": f.sScrollHeadInner
                }).css({
                    "box-sizing": "content-box",
                    largura: c.sXInner || "100%"
                }).append(i.removeAttr("id").css("margin-left", 0).append("top" === jg: null).append(b.children("thead"))))).Append(h("<div />", {
                    "classe": f.sScrollBody
                }).css({
                    position: "relative",
                    estouro: "auto",
                    largura: !d ? null : v(d)
                }).endend(b));
                l && i.append(h("<div />", {
                    "class": f.sScrollFoot
                }).css({
                    overflow: "hidden",
                    border: 0,
                    width: d ? !d ? null : v(d) : "100%"
                }).append(h("<div />", {
                    "class": f.sScrollFootInner
                }).append(m.removeAttr("id").css("margem esquerda", 0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
                var b = i.crianças(),
                    k = b[0],
                    f = b[1],
                    t = l ? b[2] : nulo;
                se(d) h(f).on("scroll.DT", function () {
                    var a = this.scrollLeft;
                    k.scrollLeft = a;
                    l && (t.scrollLeft = a)
                });
                h(f).css(e & c Coluna ? max - height : altura, e);
            });
        return i[0]
    }

    function la(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = h(a.nScrollHead),
            g = f[0].estilo,
            j = f.children("div"),
            i = j[0].estilo,
            m = j.children("tabela"),
            j = a.nScrollBody,
            l = h(j),
            q = j.style,
            t = h(a.nScrollFoot).children("div"),
            n = t.children("tabela"),
            o = h(a.nTHead),
            p = h(a.nTable),
            s = p[0],
            r = s.style,
            u = a.nTFoot ? h(a.nToot) : null,
            x = a.oBrowser,
            U = x.bScrollOversize,
            Xb = D(a.aoColumns, "nTh"),
            Q, L, R, w, Ua = [],
            y = [],
            z = [],
            A = [],
            B, C = funo(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        L = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis! ==
            L && a.scrollBarVis! == k) a.scrollBarVis = L, $(a);
        senão {
            a.scrollBarVis = L;
            p.children("thead, tfoot").Remove();
            u && (R = u.clone().prependTo(p), Q = u.find("tr"), R = R.find("tr"));
            w = o.clone().prependTo(p);
            o = o.find(" tr ");
            L = w.find(" tr ");
            w.find(" th, td ").removeAttr(" tabindex ");
            c || (q.width = " 100% ", f[0].style.width = "100%");
            h.each(ra(a, w), função(b, c) {
                B = aa(a, b);
                c.style.width = a.aoColumns[B].sWidth
            });
            u && I(função(a) {
                a.style.width = ""
            }, R);
            f = p.outerWidth();
            if ("" === c) {
                r.width = "100% ";
                if (U && (p.find(" tbody ").height() > j.offsetHeight ||
                        "rolar" == l.css("estouro-y"))) r.width = v(p.outerWidth() - b);
                f = p.outerWidth()
            }
            mais ""! == d && (r.width = v(d), f = p.outerWidth());
            I(C, L);
            I(função(a) {
                z.push(a.innerHTML);
                Ua.push(v(h(a).css("width")))
            }, L);
            I(função(a, b) {
                if (h.inArray(a, Xb) ! == -1) a.style.width = Ua[b]
            }, o);
            h(L).height(0);
            u && (I(C, R), I(função(a) {
                A.push(a.innerHTML);
                y.push(v(h(a).css("largura")))
            }, R), I(função(a, b) {
                a.style.width = y[b]
            }, Q), h(R).height(0));
            I(função(a, b) {
                a.innerHTML = '<div-classe = "dataTables_sizing">' + z[b] + "</ div>";
                a.childNodes[0].style.height =
                    "0";
                a.childNodes[0].style.overflow = "oculto";
                a.style.width = Ua[b]
            }, L);
            u && I(função(a, b) {
                a.innerHTML = '<div class = "dataTables_sizing"> ' + A[b] + "</ div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "oculto";
                a.style.width = y[b]
            }, R);
            if (p.outerWidth() < f) {
                Q = j.scrollHeight > j.offsetHeight || "rolagem" == l.css("estouro-y ") ? f + b : f;
                if (U && (j.scrollHeight > j.offsetHeight || " rolar " == l.css(" estouro-y "))) r.width = v(Qb);
                (" " === c || " "! == d) && K(a, 1, " Possível desalinhamento de coluna ", 6)
            }
            mais Q = " 100% ";
            q.width = v(Q);
            g.width = v(Q);
            u && (a.nScrollFoot.style.width = v(Q));
            !e && U && (q.altura = v(s.desconjuntoHeight + b));
            c = p.outerWidth();
            m[0].style.width = v(c);
            i.width = v(c);
            d = p.height() > j.clientHeight || "scroll" == l.css("estouro-y"
                e = "preenchimento" + (x.bScrollbarLeft ? "Esquerda" : "Direita"); i[e] = d ? b + "px" : "0px"; u && (n[0].style.width = v(c), t[0].style.width = v(c), t[0].style[e] = d ? b + "px" : "0px"); p.children("colgroup").insertBefore(p.children("thead")); l.scroll();
                if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
            }
        }
        função I(a, b, c) {
            para(var d = 0, e = 0,
                f = b.length, g, j; e < f;) {
                g = b[e].firstChild;
                para(j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
                e++
            }
        }
        funo Fa(a) {
            var b = a.nTable,
                c = a.aoColumns,
                d = a.oScroll,
                e = d.sY,
                f = d.sX,
                g = d.sXInner,
                j = c.length,
                i = ma(a, "bVisible"),
                m = h("th", a.nTHead),
                l = b.getAttribute("largura"),
                k = b.parentNode,
                t = 1,
                n, o, p = a.oBrowser,
                d = p.bScrollOversize;
            (n = b.style.width) && -1! == n.indexOf("%") && (l = n);
            para(n = 0; n < i.length; n++) o = c[i[n]], null! == o.sWidth && (o.sWidth = Eb(o.sWidthOrig, k), t = !0);
            se(d ||
                !t && !f && !e && j == V(a) && j == m.length) para(n = 0; n < j; n++) i = aa(a, n), nulo! == i && (c[i].sWidth = v(m.eq(n).width()));
            else {
                j = h(b).clone().css("visibilidade", "oculto").removeAttr("id");
                j.find("tbody tr").remove();
                vars = h("<tr />").appendTo(j.find("tbody"));
                j.find("thead, tfoot").remove();
                j.append(h(a.nTHead).clone()).append(h(a.nToot).clone());
                j.find("tfoot th, tfoot td").css("largura ", " ");
                m = ra(a, j.find(" thead ")[0]);
                para(n = 0; n < i.length; n++) o = c[i[n]], m[n].style.width = null! == o.sWidthOrig && ""! == o.sWidthOrig ? v(o.sWidthOrig) :
                    "", o.sWidthOrig && f && h(m[n]).append(h("<div />").css({
                        largura: o.sWidthOrig,
                        margem: 0,
                        preenchimento: 0,
                        limite: 0,
                        altura: 1
                    }));
                if (a.aoData.length) para(n = 0; n < i.length; n++) t = i[n], o = c[t], h(Fb(a, t)).(!1).append(o.sContentPadding).appendTo(s);
                h("[nome]", j).removeAttr("nome");
                o = h("<div />").Css(f || e ? {
                    posição: "absoluta",
                    topo: 0,
                    esquerda: 0,
                    altura: 1,
                    direita: 0,
                    estouro: "oculto"
                } : {}).append(j).appendTo(k);
                f && g ? Largura(g) : f ? (j.css("largura", "auto"), j.removeAttr("largura"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) :
                    l && j.width(l);
                para(n = e = 0; n < i.length; n++) k = h(m[n]), g = k.outerWidth() - k.width(), k = p.bBounding ? Math.ceil(m[n].getBoundingClientRect().largura) : k.outerWidth(), e + = k, c[i[n]].sWidth = v(kg);
                b.style.width = v(e);
                o.remove()
            }
            l && (b.style.width = v(l));
            se((l || f) && !a._reszEvt) b = função() {
                h(E).on(função "resize.DT -" + a.sInstance, Oa(function () {
                    $(a)
                }))
            }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
        }
        Eb(a, b) {
            se(!a) retornar 0;
            var c = h("<div />").css("largura", v(a)).appendTo(b || H.body),
                d = c[0].offsetWidth;
            c.remove();
            retorno d
        }
        função Fb(a,
            b) {
            var c = Gb(a, b);
            se(0 > c) retornar nulo;
            var d = a.aoData[c];
            retorno!d.nTr ? h("<td />").html(B(a, c, b, "exibição"))[0] : d.anCells[b]
        }
        função Gb(a, b) {
            para(var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "exibição") + "", c = c.replace(Yb, ""), c = c.replace(/ & nbsp; /
                g, ""), c.length > d && (d = c.length, e = f);
            retorno e
        }
        função v(a) {
            retorno nulo === a ? "0px" : "número " == typeof a ? 0 > a ? " 0px " : a + " px " : a.match(/ \ d $ /) ? a + " px " : a
        }
        função X(a) {
            var b, c, d = [],
                e = a.aoColumns,
                f, g, j, i;
            b = a.aaSortingFixed;
            c = h.isPlainObject(b);
            var m = [];
            f = função(a) {
                a.length &&
                    !h.isArray(a[0]) ? m.push(a) : h.merge(m, a)
            };
            h.isArray(b) && f(b);
            c && b.pre && f(b.pre);
            f(a.aaSorting);
            c && b.post && f(b.post);
            para(a = 0; a < m.length; a++) {
                i = m[a][0];
                f = e[i].aDataSort;
                b = 0;
                para(c = f.length; b < c; b++) g = f[b], j = e[g].sTipo || "string", m[a]._ idx === k && (m[a]._ idx = h.inArray(m[a][1], e[g].asSorting)), d.push({
                    src: i,
                    col: g,
                    dir: m[a][1],
                    índice: m[a].idx,
                    tipo: j,
                    formatador: n.ext.type.order[j + "- pre"]
                })
            }
            retorno d
        }
        função mb(a) {
            var b, c, d = [],
                e = n.ext.type.order,
                f = a.aoData,
                g = 0,
                j, i = a.aiDisplayMaster,
                h;
            Ga(a);
            h = X(a);
            b = 0;
            h.length;
            b <
                b++) j = h[b], j.formatter && g++, Hb(a, j.col);
        if ("ssp"! = y(a) && 0! == h.length) {
            b = 0;
            c = i.length;
            b < c;
            b++) d[i[b]] = b;
        g === h.length_i.sort(função(a, b) {
            var c, e, g, j, i = h.length,
                k = f[a]._ aSortData,
                n = f[b]._ aSortData;
            para(g = 0; g < i; g++) if (j = h[g], c = k[j.col], e = n[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0! == c) retorno "asc" === j.dir ? c : -c = d[a];
            e = d[b];
            retorno c < e - 1: c > e 1: 0
        }): i.sort(função(a, b) {
                var c, g, j, i, k = h.length,
                    n = f[a]._ aSortData,
                    o = f[b]._ aSortData;
                para(j = 0; j < k; j++) se(i = h[j], c = n[i.col], g = o[i.col], i = e[i.type + "-" + i.dir] || e["string -" + i.dir],
                    c = i(c, g), 0! == c) return c;
                c = d[a];
                g = d[b];
                retorno c < g - 1 - 1: c > g 1: 0
            }
        }
    }
    a.bSorted = !0
}
função Ib(a) {
    para(var b, c, d = a.aoColunas, e = X(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < f > ) {
        c = d[f];
        var j = c.asEscolha;
        b = c.sTítulo.replace(/<.*?>/g, "");
        var i = c.nTh;
        i.removeAttribute("aria-sort");
        c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir "ascendente": "descendente"), c = j[e[0].index + 1] || j[0]) : c = j[0], b + = "asc" === c ? .sSortAscending : a.sSortDescending);
        i.setAttribute(função "aria-label", b)
    }
}
Va(a,
    b, c, d) {
    var e = a.aaEscolha,
        f = a.aoColumns[b].asEscolha,
        g = função(a, b) {
            var = a._idx;
            c == = k && (c = h.inArray(a[1], f));
            retorno c + 1 < f.length ? c + 1 : b ? nulo : 0
        };
    "número" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1! == c ? (b = g(e[c], 0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c].idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._ idx = 0)) : e.length && e[0][0] b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._ idx = b): (e.length = 0, e.push([b, f[0]]), e[0]._ idx = 0);
T(a);
"função" ==
typeof d && d(a)
}
função Ma(a, b, c, d) {
    var e = a.aoColumns[c];
    Wa(b, {}, função(b) {
        !1! == e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(função() {
            Va(a, c, b.shiftKey, d);
            "ssp"! == y(a) && C(a, !1)
        }, 0)) : Va(a, c, b.shiftKey, d))
    })
}
função wa(a) {
    var b = a.aÚltima ordem,
        c = a.oClasses.sSortColumn,
        d = X(a),
        e = a.oFeatures,
        f, g;
    if (e.bSort && e.bSortClasses) {
        e = 0;
        para(f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
        e = 0;
        para(f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c +
            (2 > e ? E + 1 : 3))
    }
    a.aLastSort = d
}
função Hb(a, b) {
    var = a.aoColumns[b], d = n.ext.order[c.sortortype], e;
    d && (e = d.call(a.oInstance, a, b, ba(a, b)))) para(var f, g = n.ext.type.order[c.sType + "- pre"], j = 0, i = a.aoData.length; j < i; j++) if (c = a.aoData[j], c._aSortData || (c._aSortData = []), c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "tipo"), c._aSortData[b] = g ? g(f) : f
}
funÃ§ Ã£ o xa(a) {
    se(a.oFeatures.bStateSave && !a.bDestroying) {
        var b = {
            tempo: +new Data,
            início: a._iDisplayStart,
            comprimento: a._iDisplayLength,
            order: h.extend(!0, [], a.aaSorting),
            pesquisa: Ab(a.oPreviousSearch),
            colunas: h.map(a.aoColumns, function (b, d) {
                return {
                    visível: b.bVisible,
                    pesquisa: Ab(a.aoPreSearchCols[d])
                }
            })
        };
        r(a, "aoStateSaveParams", " função stateSaveParams ", [a, b]);
        a.oSavedState = b;
        a.fnStateSaveCallback.call(a.oInstance, a, b)
    }
}
Jb(a, b, c) {
    var d, e, f = a.aoColumns,
        b = function (b) {
            se(b && b.time) {
                var g = r(a, "aoStateLoadParams", "estadoLoadParams", [a, b]);
                if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +nova data - 1E3 * g) && !(B.colunas && f.length! == b.colunas.length))) {
                    .oLoadedState = h.extend(!0, {}, b);
                    b.start! == k &&
                        (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
                    b.length! == k && (a._iDisplayLength = b.length);
                    b.order! == k && (a.aaSorting = [], h.each(b.ordem, função(b, c) {
                        a.aaEscolha.push(c[0] > = f.length ? [0, c[1]] : c)
                    }));
                    b.search! == k && h.extend(a.oPreviousSearch, Bb(b.search)),
                        if (b.columns) {
                            d = 0;
                            para(e = b.columns.length; d < e; d++) g = b.columns[d], g.visible! == k && (f[d].bVisible = g.visible), g.search! == k && h.extend(a.aoPreSearchCols[d], Bb(g.search))
                        } r(a, "aoStateLoaded", "stateLoaded", [a, b])
                }
            }
            c()
        };
    if (a.oFeatures.bStateSave) {
        var g =
            a.fnStateLoadCallback.call(a.oInstance, a, b);
        g! == k && b(g)
    }
    mais c()
}

function ya(a) {
    var b = n.configurações,
        a = h.inArray(a, D(b, "nTable"));
    return -1! == a ? B[a] : null
}
função K(a, b, c, d) {
    c = "Aviso de tabelas de dados:" + (a ? "Tabela id = " + a.sTableId + " - " : " ") + c;
    d && (c + = ". Para obter mais informações sobre esse erro, consulte http://datatables.net/tn/" + d);
    if (b) E.console && console.log && console.log(c);
    else if (b = n.ext, b = b.sErrMode || b.errMode, a && r(a, nulo, "erro", [a, d, c]), "alerta" == b) alerta(c);
    senão {
        if ("lançar" == b) erro de lançamento(c);
        "função" ==
        typeof b && b(a, d, c)
    }
}
função F(a, b, c, d) {
    h.isArray(c) ? h.each(c, função(c, d) {
        h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d)
    }) : (d === k && (d = c), b[c] ! = = K && (a[d] = b[c]))
}

function Xa(a, b, c) {
    var d, e;
    para(e em b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "dados "! == e && " aaData "! == e && h.isArray(d) ? d.slice() : d);
    retorne uma função
}
Wa(a, b, c) {
    h(a).on(" clique. DT ", b, função(b) {
        h(a).blur();
        c(b)
    }).On(" keypress.DT ", b, função(a) {
        13 === a.which && (a.preventDefault(), c(a))
    }).on("selectstart.DT",
        function () {
            return !1
        })
}
função z(a, b, c, d) {
    c && a[b].push({
        fn: c,
        sName: d
    })
}
função r(a, b, c, d) {
    var e = [];
    b && (e = h.map(a[b].slice().reverse(), função(b) {
        retorno b.fn.apply(a.oInstance, d)
    }));
    null! == c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
    retorno e
}
função Sa(a) {
    var b = a._iDisplayStart,
        c = a.fnDisplayEnd(),
        d = a._iDisplayLength;
    b > = c && (b = cd);
    b - = b % d;
    if (-1 === d | | 0 > b) b = 0;
    a._iDisplayStart = b
}

function Na(a, b) {
    var = a.renderer, d = n.ext.renderer[b];
    retorno h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" ===
        typeof c ? d[c] || d._ : d._
}
função y(a) {
    retornar a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
}
função ia(a, b) {
    var = c = [], c = Kb.numbers_length, d = Math.floor(c / 2);
    b <= c = c = Y(0, b): a <= d(c = Y(0, c - 2), c.push("elipse"), c.push(b - 1)): (a > = b - 1 - d ? c = Y(b - (c - 2), b) : (c = Y(a - d + 2, a + d - 1), c.push("elipse"), c.push(b - 1)), c.splice(0, 0, "elipse"), c.splice(0, 0, 0));
    c.DT_el = "span";
    retorno c
}
função Da(a) {
    h.each({
        num: function (b) {
            retorno za(b, a)
        },
        "num-fmt": função(b) {
            retorno za(b, a, Ya)
        },
        "html-num": função(b) {
            retorno za(b,
                a, Aa)
        },
        "html-num-fmt": função(b) {
            retorno za(b, a, Aa, Ya)
        }
    }, função(b, c) {
        x.type.order[b + a + " -pre "] = c;
        b.match(/ ^ html \ - /) && (x.type.search[b + a] = x.type.search.html)
    })
}
função Lb(a) {
    função de retorno() {
        var b = [ya(este[n.ext.iApiIndex])].concat(Array.prototype.slice.call(argumentos));
        return n.ext.internal[a].apply(isto, b)
    }
}
var n = função(a) {
    this.$ = function (a, b) {
        retornar this.api(!0).$(a, b)
    };
    this._ = função(a, b) {
        return this.api(!0).rows(a, b).data()
    };
    this.api = function (a) {
        retornar um ? novo s(ya(este[x.iApiIndex])) : novo s(este)
    };
    this.fnAddData = function (a, b) {
        var = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
        (b === k || b) && c.draw();
        retorno d.flatten().toArray()
    };
    this.fnAdjustColumnSizing = function (a) {
        var b = this.api(!0).columns.adjust(),
            c = b.settings()[0],
            d = c.oScroll;
        a === k || a ? b.draw(!1) : (""! == d.sX || ""! == d.sY) && la(c)
    };
    this.fnClearTable = função(a) {
        var b = isto.api(!0).clear();
        (a === k || a) && b.draw()
    };
    this.fnClose = função(a) {
        this.api(!0).row(a).child.hide()
    };
    this.fnDeleteRow = função(a,
        b, c) {
        var d = this.api(!0),
            a = d.rows(a),
            e = a.settings()[0],
            h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(isto, e, h);
        (c === k || c) && d.draw();
        retorno h
    };
    this.fnDestroy = function (a) {
        this.api(!0).destroy(a)
    };
    this.fnDraw = função(a) {
        this.api(!0).draw(a)
    };
    this.fnFilter = função(a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === k ? e.search(a, c, d, h) : e.coluna(b).search(a, c, d, h);
        e.draw()
    };
    this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a! == k) {
            var d = a.nodeName ? a.nodeName.toLowerCase() : "";
            return b! == k || "td" == d || "th" == d ? c.cell(a, b).data() :
                c.row(a).data() || null
        }
        return c.data().toArray()
    };
    this.fnGetNodes = função(a) {
        var b = this.api(!0);
        retorno a! = = k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
    };
    this.fnGetPosition = função(a) {
        var b = this.api(!0),
            c = a.nodeName.toUpperCase();
        retorno "TR" == c ? B.row(a).index() : "TD" == c || "TH" == c ? (A = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
    };
    this.fnIsOpen = função(a) {
        return this.api(!0).row(a).child.isShown()
    };
    this.fnOpen = function (a, b, c) {
        retornar this.api(!0).row(a).child(b, c).show().child()[0]
    };
    this.fnPageChange = function (a, b) {
        var = this.api(!0).page(a);
        (b === k || b) && c.draw(!1)
    };
    this.fnSetColumnVis = função(a, b, c) {
        a = this.api(!0).coluna(a).visível(b);
        (c === k || c) && a.columns.adjust().desenhar()
    };
    this.fnSettings = function () {
        return ya(este[x.iApiIndex])
    };
    this.fnSort = função(a) {
        this.api(!0).ordem(a).draw()
    };.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c)
    };
    this.fnUpdate = função(a, b, c, d, e) {
        var h = this.api(!0);
        c === k || null === c.h.row(b).data(a): h.célula(b, c).data(a);
        e === k || e) && h.columns.adjust();
    (d === k || d) && h.draw();
    retorno 0
};
this.fnVersionCheck = x.fnVersionCheck;
var b = isso,
    c = a === k,
    d = este.length;
c && (a = {});
this.oApi = this.internal = x.internal;
para(var e em n.ext.internal) e && (isto[e] = Lb(e));
this.each(function () {
    var e = {},
        g = 1 < d ? Xa(e, a, !0) : a,
        j = 0,
        i, e = this.getAttribute("id"),
        m = !1,
        l = n.defaults,
        q = h(this);
    if ("table"! = this.nodeName.toLowerCase()) K(nulo, 0, "inicialização de nó fora da tabela (" + this.nodeName + ")", 2);
    eb(l);
    fb(l.coluna);
    J(l, l, !0);
    J(l.coluna, l.coluna, !0);
    J(l, h.extenda(g, q.data))));
var t = n.settings,
    j = 0;
para(i = t.length; j < i; j++) {
    var = t[j];
    if (o.nTable == this || o.nTHead && o.nTHead.parentNode == este || o.nTFoot && o.nTFoot.parentNode == isto) {
        var s = g.bRetrieve! == k ? g.bRetrieve : l.bRetrieve;
        if (c || s) retornar o.oInstance;
        if (g.bDestroy! == k ? g.bDestroy : l.bDestroy) {
            o.oInstance.fnDestroy();
            break
        }
        mais {
            K​​(o, 0, "Não é possível reinicializar DataTable", 3);
            return
        }
    }
    if (o.sTableId == this.id) {
        t.splice(j, 1);
        quebra
    }
}
if (null === e || "" === e) this.id = e = "DataTables_Table_" + n.ext._unique++;
var p = h.extend(!0, {}, n.models.oSettings, {
    sDestroyWidth: q[0].style.width,
    sststance: e,
    sTableId: e
});
p.nTable = isto;
p.oApi = b.internal;
p.oInit = g;
t.push(p);
p.o.Instance = 1 === b.length b: q.dataTable();
eb(g);
Ca(g.oLanguage);
g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
g = Xa(h.extend(!0, {}, l), g);
F(p.oCaracterísticas, g, "bPaginado bLengthChange bFilter bSort bSortMulti bInfo bProcessamento bAutoWidth bSortClasses bServerSide bDeferRender ".split(" "));
F(p, g, [" asStripeClasses ", " ajax ", " fnServerData ", " fnFormatNumber ", " sServerMethod ",
"aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderizador ", " searchDelay ", " rowId ", [" iCookieDuration ", " iStateDuration "], [" oSearch ", " oPreviousSearch "], [" aoSearchCols ", " aoPreSearchCols "], [" iDisplayLength ", " _ iDisplayLength "]]);
F(p.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);
F(p.oIdioma, g, "fnInfoCallback");
z(p, "aoDrawCallback", g.fnDrawCallback, "usuário");
z(p, "aoServerParams", g.fnServerParams, "usuário");
z(p, "aoStateSaveParams", g.fnStateSaveParams, "usuário") z(p, "aoStateLoadParams", g.fnStateLoadParams, "usuário");
z(p, "aoStateLoaded", g.fnStateLoaded, "usuário");
z(p, "aoRowCallback", g.fnRowCallback, "usuário"
    z(p, "aoRowCreatedCallback", g.fnCreatedRow, "usuário"); z(p, "aoHeaderCallback", g.fnHeaderCallback, "usuário"); z(p, "aoFooterCallback", g.fnFooterCallback, "usuário "); z(p, " aoInitComplete ", g.fnInitComplete, " usuário "); z(p, " aoPreDrawCallback ",
        g.fnPreDrawCallback, "user"); p.rowIdFn = S(g.rowId); gb(p);
    var u = p.oClasses; h.extend(u, n.ext.classes, g.oClasses); q.addClass(u.sTable); p.iInitDisplayStart === k && (p.iInitDisplayStart = g.iDisplayStart, p._iDisplayStart = g.iDisplayStart); null! == g.iDeferLoading && (p.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), p._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, p._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
    var v = p.oIdioma h.extend(!0, v, g.oLanguage); v.sUrl && (h.ajax({
        dataType: "json",
        url: v.sUrl,
        sucesso: function (a) {
            Ca(a);
            J(l.oLanguage, a);
            h.extend(true, v, a);
            ha(p)
        },
        erro: function () {
            ha(p)
        }
    }), m = !0); null === g.asStripeClasses && (p.asStripeClasses = [u.SStripeOdd, u.SistripeEven]);
    var e = p.asStripeClasses, x = q.children("tbody").find("tr").eq(0); 1! == h.inArray(!0, h.map(e, função(a) {
        retornar x.hasClass(a)
    })) && (h("tbody tr", this).removeClass(e.join()
        "")), p.asDestroyStripes = e.slice());
e = [];
t = this.getElementsByTagName("thead");
0! == t.length && (ea(p.aoHeader, t[0]), e = ra(p));
if (null === g.aoColumns) {
    t = [];
    j = 0;
    para(i = e.length; j < i; j++) t.push(nulo)
}
mais t =
    g.aoColumns;
j = 0;
para(i = t.length; j < i; j++) Ea(p, e ? e[j] : null);
ib(p, g.aoColumnDefs, t, funo(a, b) {
    ka(p, a, b)
});
if (x.length) {
    var w = função(a, b) {
        return a.getAttribute("dados -" + b) ! == null ? b : null
    };
    h(x[0]).children("th, td").each(função(a, b) {
        var = p.aoColumns[a];
        if (c.mData === a) {
            var d = w(b, "classificar") || w(b, "ordem"),
                e = w(b, "filtro") || w(b, "pesquisa");
            if (d! == null || e! == null) {
                c.mData = {
                    _: a + ". display",
                    classificação: d! == null ? a + ". @ data -" + d : k,
                    tipo: d! == null ? a + ". @ data -" + d : k,
                    filtro: e! == null ? a + ". @ data -" + e : k
                };
                ka(p, a)
            }
        }
    })
}
var U = p.oFeatures,
    e = function () {
        if (g.aaEscalar === k) {
            var a = p.aaEscolha;
            j = 0;
            para(i = a.length; j < i; j++) a[j][1] = p.aoColumns[j].asSorting[0]
        }
        wa(p);
        U.bSort && z(p, "aoDrawCallback", function () {
            se(p.bSorted) {
                var a = X(p),
                    b = {}
                h.each(a, função(a, c) {
                    b[c.src] = c.dir
                });
                r(p, nulo, "ordem", [p, a, b]);
                Ib(p)
            }
        });
        z(p, "aoDrawCallback", function () {
            (p.bSorted || y(p) === "ssp" || U.bDeferRender) && wa(p)
        }, "sc");
        var a = q.children("legenda").each(function () {
                this._captionSide = h(this).css("lado da legenda")
            }),
            b = q.children("thead");
        b.length === 0 && (b = h("<thead />").appendTo(q));
        p.nTHead = b[0];
        b = q.children("tbody");
        b.length === 0 && (b = h("<tbody />").appendTo(q));
        p.nTBody = b[0];
        b = q.children("tfoot");
        se(b.length === 0 && a.length > 0 && (p.oScroll.sX! == "" || p.oScroll.sY! == "")) b = h("<tfoot />").appendTo(q);
        se(b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter)
        else
        else(b.length > 0) {
            p.nTFoot = b[0];
            ea(p.aoFooter, p.nTFoot)
        }
        if (g.aaData) para(j = 0; j < g.aaData.length; j++) O(p, g.aaData[j]);
        else(p.bDeferLoading || y(p) == "dom") && na(p, h(p.nTBody).children("tr"); p.aiDisplay = p.aiDisplayMaster.slice(); p.bInicializado = true; m === false && ha(p)
        };
        g.bStateSave ? (U.bStateSave = !0, z(p, "aoDrawCallback", xa, "state_save"), Jb(p, g, e)) : e()
    }
});
b = null;
retorna isto
}, x, s, o, u, Za = {}, Mb = / [\ r \ n] /
g, Aa = / <. *? > /
g, Zb = / ^ \ d {2,4} [\. \ / \ -] \ d {1,2} [\. \ / \ -] \ d {1,2} ([T] { 1} \ d {1,2} [: \.] \ D {2} ([\.] \ D {2})?)? $ /, $ B = RegExp("(\\ / | \\ . \\ * | \\ + | \\? | \\ || \\ (| \\) | \\ [| \\] | \\ {| \\} | \\\\ | \\ $ | \\ ^ | \\ -) ", " g "), Ya = / [', $ £ $ \ u2009 \ u202F \ u20BD \ u20a9 \ u20BArfkɃΞ] /
gi, M = function (a) {
    retorno!a || 0 === a || "-" === a ? !0 : !1
}, Nb = função(a) {
    var b = parseInt(a, 10);
    retorno!isNaN(b) &&
        isFinite(a) ? b : null
}, Ob = função(a, b) {
    Za[b] || (Za[b] = RegExp(Qa(b), "g"));
    return "string" == = typeof a && "."! == b ? a.replace(/\./g, "").substitua(Za[b], ".") : a
}, $ a = função(a, b, c) {
    var d = "string" === typeof a;
    if (M(a)) retornar!0;
    b && d && (a = Ob(a, b));
    c && d && (a = a.replace(Ya, ""));
    return !isNaN(parseFloat(a)) && isFinite(a)
}, Pb = função(a, b, c) {
    retorno M(a) ? !0 : !(M(a) || "string" == = typeof a) ? null : $ a(a.replace(Aa, ""), b, c) 0: null
}, D = função(a, b, c) {
    var d = [],
        e = 0,
        f = a.length;
    if (c! == k) para(; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
    else para(; e <
        f; e++) a[e] && d.push(a[e][b]);
    retorno d
}, ja = função(a, b, c, d) {
    var e = [],
        f = 0,
        g = b.length;
    if (d! == k) para(; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
    else para(; f < g; f++) e.push(a[b[f]][c]);
    return e
}, Y = função(a, b) {
    var c = [],
        d;
    b == = k(b = 0, d = a): (d = b, b = a);
    para(var e = b; e < d; e++) c.push(e);
    retorno c
}, Qb = função(a) {
    para(var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
    retorno b
}, qa = função(a) {
    var b;
    a: {
        if (!(2 > a.length)) {
            b = a.slice().sort();
            para(var c = b[0], d = 1, e = b.length; d < e; d++) {
                se(b[d] === c) {
                    b = !1;
                    quebra a
                }
                c = b[d]
            }
        }
        b = !0
    }
    se(b) retornar a.fatia();
    b = [];
    var e = a.length,
        f, g = 0,
        d = 0;
    a: para(; d < e; d++) {
        c = a[d];
        para(f = 0; f < g; f++) if (b[f] === c) continuar a;
        b.push(c);
        g++
    }
    retornar b
};
n.util = {
    throttle: function (a, b) {
        var = b = = k ? b : 200, d, e;
        função de retorno() {
            var b = isto,
                g = +novo Data,
                j = argumentos;
            d & & g < d + c ? (clearTimeout(e), e = setTimeout(function () {
                d = k;
                a.apply(b, j)
            }, c)) : (d = g, a.apply(b, j))
        }
    },
    escapeRegex: function (a) {
        retornar a.replace($ b, "\\ $ 1")
    }
};
var A = função(a, b, c) {
        a[b] ! == k && (a[c] = a[b])
    },
    ca = / \ [. * ? \] $ /, W = / \ (\) $ /, Qa = n.util.escapeRegex, va = h ("<div>") [0], Wb = va.textContent! == k, Yb = /
    < .* ? > /g,Oa=n.util.throttle,Rb=[],w=Array.prototype,ac=function(a){var b, c, d = n.configurações, e = h. map (d, função (a) {return a.nTable}); if (a) {if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase ()) return b = h.inArray (a, e), - 1! == b? [d [b]]: null; if (a && "function" === typeof a.settings) return a.settings ( ) .toArray (); "string" === typeof a? c = h (a): uma instância de h && (c = a)} mais return []; if (c) return c.map (function () {b = h.inArray (this, e); return-1! == b? d [b]: null}). toArray ()}; s = função (a, b) {if (! (este exemplo de
s)) retorna novo s(a, b);
var c = [],
    d = função(a) {
        (a = ac(a)) && (c = c.concat(a))
    };
se(h.isArray(a)) para(var e = 0, f = a.length; e < f; e++) d(a[e]);
ou d(a);
this.context = qa(c);
b && h.merge(this, b);
this.selector = {
    linhas: null,
    cols: null,
    opts: null
};
s.extend(isto, isso, Rb)
};
n.Api = s;
h.extend(s.prototype, {
    any: function () {
        retorna 0! == this.count()
    },
    concat: w.concat,
    contexto: [],
    count: function () {
        retorna this.flatten().length
    },
    cada um: function (a) {
        para(var b = 0, c = este.length; b < c; b++) a.call(isto, este[b], b, isto);
        retorne isto
    },
    eq: function (a) {
        var b =
            this.context;
        return b.length > a ? novo s(b[a], este[a]) : null
    },
    filtro: function (a) {
        var b = [];
        se(w.filter) b = w.filter.call(this, a, this);
        else para(var c = 0, d = este.length; c < d; c++) a.call(isto, isto[c], c, isto) && b.push(this[c]);
        return new s(this.context, b)
    },
    flatten: function () {
        var a = [];
        retorna new s(this.context, a.concat.apply(a, this.toArray()))
    },
    join: w.join,
    indexOf: w.indexOf || function (a, b) {
        para(var c = b || 0, d = este.length; c < d; c++) if (this[c] === a) return c;
        return -1
    },
    iterador: function (a, b, c, d) {
        var e = [],
            f, g, j, h, m, l = isto.contexto,
            n, o, u = this.selector;
        "string" === typeof a && (d = c, c = b, b = a, a = !1);
        g = 0;
        para(j = l.length; g < j; g++) {
            var r = novo s(l[g]);
            if ("tabela" === b) f = c.call(r, l[g], g), f! = = k && e.else if ("colunas" === b || "linhas" === b) f = c.call(r, l[g], isto[g], g), f! == k && e.push(f);
                else if ("coluna" === b || "coluna-linhas" === b || "linha" === b || "célula" === b) {
                o = this[g];
                "coluna-linhas" === b && (n = Ba(l[g], u.opts));
                h = 0;
                para(m = o.length; h < m; h++) f = o[h], f = "célula" === b.ccall(r, l[g], f.row, f.coluna, g, h): c.call(r, l[g], f, g, h, n), f! == k && e.push(f)
            }
        }
        return e.length || d ? (a = novo s(l, a ?
            e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : isto
    },
    lastIndexOf: w.lastIndexOf || function (a, b) {
        retornar this.indexOf.apply(this.toArray.reverse(), argumentos)
    },
    length: 0,
    map: function (a) {
        var b = [];
        if (w.map) b = w.map.call(isso, a, isto);
        else para(var c = 0, d = este.length; c < d; c++) b.push(a.call(this, this[c], c));
        return new s(this.context, b)
    },
    pluck: function (a) {
        retornar this.map(função(b) {
            retorno b[a]
        })
    },
    pop: w.pop,
    push: w.push,
    reduzir: w.reduzir || função(a, b) {
        return hb(isso, a, b, 0, este.limento,
            1)
    },
    reduceRight: w.reduceRight || function (a, b) {
        return hb(isso, a, b, this.length - 1, -1, -1)
    },
    reverso: w.reverse,
    seletor: null,
    shift: w.shift,
    slice: function () {
        return new s(this.context, this)
    },
    ordenação: w.sort,
    splice: w.splice,
    toArray: function () {
        retorno w.slice.call(this)
    },
    to $: function () {
        retornar h(this)
    },
    toJQuery: function () {
        retornar h(this)
    },
    unique: function () {
        retornar novo s(this.context, qa(this))
    },
    unshift: w.unshift
});
s.extend = função(a, b, c) {
    se(c.length && b && (b instância de s || b.__ dt_wrapper)) {
        var d, e, f, g = função(a, b, c) {
            função de retorno() {
                var d =
                    b.apply(a, argumentos);
                s.extend(d, d, c.methodExt);
                retorne d
            }
        };
        d = 0;
        para(e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__ dt_wrapper = !0, s.extend(a, b[f.name], f.propExt)
    }
};
s.register = o = função(a, b) {
    if (h.isArray(a)) para(var c = 0, d = a.length; c < d; c++) s.register(a[c], b);
    else para(var e = a.split("."), f = Rb, g, j, c = 0, d = e.length; c < d; c++) {
        g = (j = -1! == e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        var i;
        a: {
            i = 0;para(var m = f.length; i < m; i++) if (f[i].name === g) {
                i =
                    f[i];
                quebra a
            }
            i = null
        }
        i || (i = {
            nome: g,
            val: {},
            methodExt: [],
            propExt: []
        }, f.push(i));
        c == = d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
    }
};
s.registerPlural = u = funo(a, b, c) {
    s.register(a, c);.register(b, function () {
        var a = c.apply(isto, argumentos);
        retorne a === this ? this : um instanceof s ? a.length ? h.isArray(a[0]) ? new s(a.context, a[0]) : a[0] : k : a
    })
};
o("tabelas ()", função(a) {
    var b;
    se(a) {
        b = s;
        var c = this.context;
        if ("número" === typeof a) a = [c[a]];
        senão
        var d = h.map(c, função(a) {
                retorno a.nTabela
            }),
            a = h(d).filter(a).map(function () {
                var a = h.inArray(isto,
                    d);
                retorne c[a]
            }).toArray();
        b = novo b(a)
    } else b = isto;
    retorne b
});
o("tabela ()", função(a) {
    var a = this.tables(a),
        b = a.context;
    retorno b.length ? new s(b[0]) : a
});
u("tabelas (). nodes ()", "tabela (). node () ", function () {
    return this.iterator(" table ", função(a) {
        return a.nTable
    }, 1)
});
u(" tabelas (). corpo () ", " tabela (). corpo ( ) ", function () {
    return this.iterator(" table ", função(a) {
        return a.nTBody
    }, 1)
});
u(" tabelas (). cabeçalho () ", " tabela (). cabeçalho () ", function () {
    return this.iterator(" table ", função(a) {
        return a.nTHead
    }, 1)
});
u(" tabelas (). footer () ",
    "table (). footer ()",
    function () {
        retornar this.iterator("table", função(a) {
            return a.nToot
        }, 1)
    });
u("tabelas (). containers ()", "table (). container ()", function () {
    retornar this.iterator("table", function (a) {
        retornar a.nTableWrapper
    }, 1)
});
o("desenhar ()", função(a) {
    return this.iterator("tabela", função(b) {
        "página" === a ? P(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a))
    })
});
o("página ()", função(a) {
    return a === k ? this.page.info().página : this.iterator("tabela", função(b) {
        Ta(b, a)
    })
});
o("page.info ()", função() {
    if (0 ===
        this.context.length) return k;
    var a = este.context[0],
        b = a._iDisplayStart,
        c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
        d = a.fnRecordsDisplay(),
        e = -1 === c;
    return {
        página: e ? 0 : Math.floor(b / c),
        páginas: e ? 1 : Math.ceil(d / c),
        início: b,
        final: a.fnDisplayEnd(),
        length: c,
        recordsTotal: a.fnRecordsTotal(),
        recordsDisplay: d,
        serverSide: "ssp" === y(a)
    }
});
o("page.len ()", função(a) {
    retornar um === k ? 0! == this.context.length ? this.context[0]._ iDisplayLength : k : this.iterator("tabela", função(b) {
        Ra(b, a)
    })
});
var Sb = função(a, b, c) {
    se(c) {
        var d = novo s(a);
        d.one("desenhar", função() {
            c(d.ajax.json())
        })
    }
    se("ssp" == y(a)) T(a, b);
    senão {
        C(a, !0);
        var e = a.jqXHR;
        e && 4! == e.readyState && e.abort();
        sa(a, [], função(c) {
            oa(a);
            para(var c = ta(a, c), d = 0, e = c.length; d < e; d++) O(a, c[d]);
            T(a, b);
            C(a, !1)
        })
    }
}
o(" ajax.json () ", function () {
    var a = this.context;
    if (0 < a.length) retorna a[0].json
});
o(" ajax.params () ", function () {
    var a = this.context;
    if (0 < a.length) retorna a[0].oAjaxData
});
o("ajax.reload ()", função(a, b) {
    return this.iterator("tabela", função(c) {
        Sb(c, !1 === b, a)
    })
});
o("ajax.url ()", função(a) {
        var b =
            this.context;
        if (a === k) {
            if (0 === b.length) retorna k;
            b = b[0];
            retorno b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        retornar this.iterator("table", function (b) {
            h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    }
    o("ajax.url (). load ()", função(a, b) {
            return this.iterator("tabela", função(c) {
                    Sb(c, !1 === b, a)
                }
            }
        };
        var ab = função(a, b, c, d, e) {
            var f = [],
                g, j, i, m, l, n;
            i = tipo de b;
            if (!b || "string" === i || "function" === i || b.length === k) b = [b];
            i = 0;
            para(m = b.length; i < m; i++) {
                j = b[i] && b[i].split && !b[i].match(/ [\ [\ (:] /) ? b[i].split(",") : [b[i]];
                l = 0;
                para(n = j.length; l < n; l++)(g = c("string" === tipoof j[l] h.trim(j[l]): j[l])) && g.length && (f = f.concat(g))
            }
            a = x.selector[a];
            if (a.length) {
                i = 0;
                para(m = a.length; i < m; i++) f = a[i](d, e, f)
            }
            retorno qa(f)
        }, bb = função(a) {
            a || (a = {});
            a.filter && a.search = == k && (a.search = a.filter);
            retorno h.extend({
                search: "none",
                order: "atual",
                página: "todos"
            }, a)
        }, cb = function (a) {
            para(var b = 0, c = a.length; b < c; b++) if (0 < a[b].comprimento) retornar a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            retorna a
        }, Ba = função(a, b) {
            var c,
                e = a.aiDisplayMaster;
            var j = b.search;
            c = b.ordem;
            d = b.page;
            if ("ssp" == y(a))) retornar "removido" === j ? [] : Y(0, e.length);
        if ("atual" == d) {
            c = a._iDisplayStart;
            para(d = a.fnDisplayEnd(); c < d; c++) f.push(g[c])
        } else if ("atual" == c || "aplicado" == c)
            if ("nenhum" == j) f = e.slice();
            else if ("aplicado" == j) f = g.slice(); sen {
            if ("removido" == j) {
                var i = {};
                c = 0;
                para(d = g.length; c < d; c++) i[g[c]] = nulo;
                f = h.map(e, função(a) {
                    retorno!i.hasOwnProperty(a) ? a : nulo
                })
            }
        } else if ("índice" = = c || "original" == c) {
            c = 0;
            para(d = a.aoData.length; c < d; c++)
            "nenhum" ==
            j f f.push(c): (e = h.inArray(c, g), (-1 === e && "removido" == j || 0 <= e && "aplicado" == j) && f.push(c))
        }
        return f
    }; o("linhas ()", função(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = " ");
        var b = bb(b),
            c = this.iterator(" tabela ", função(c) {
                var e = b,
                    f;
                retorno ab(" linha ", a, função(a) {
                    var b = Nb(a),
                        i = c.aoData;
                    if (b! == null && !E) return [b];
                    f || (f = Ba(c, e));
                    if (b! == null && h.inArray(b, f) ! == -1) return [b];
                    if (a === null || a === k || a === "") return f;
                    if (tipo de uma === "função ") return h.map(f, função(b) {
                        var c = i[b];
                        retorno a(b, c._aData, c.nTr) ? b : nulo
                    });
                    if (a.nodeName) {
                        var b =
                            a._DT_RowIndex,
                            m = a._DT_CellIndex;
                        se(b! == k) retornar i[b] && i[b].nTr === a ? [b] : [];
                        se(m) retornar i[m.row] && i[m.row].nTr === a ? [m.row] : [];
                        b = h(a).closest("* [data-dt-row]");
                        retorno b.length ? [b.data("dt-row")] : []
                    }
                    se(digite uma === "string" && a.charAt(0) === "#") {
                        b = c.aIds[a.replace(/ ^#/, "")];
                        if (b !== k) return [b.idx]
                    }
                    b = Qb(ja(c.aoData, f, "nTr"));
                    return h(b).filter(a).map(function () {
                        retornar this._DT_RowIndex
                    }).Array()
                }, c, e)
            }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    }) o("linhas (). nós ()", function () {
        return this.iterator("linha",
            function (a, b) {
                return a.aoData[b].nTr || k
            }, 1)
    }); o("linhas (). dados ()", função() {
        return this.iterator(!0, "linhas", função(a, b) {
            retorno ja(a.aoData, b, "_ aData")
        }, 1)
    }); u("linhas (). cache ()", "linha (). cache ( ) ", function (a) {
        return this.iterator(" linha ", função(b, c) {
            var d = b.aoData[c];
            retorno " pesquisa " === a ? d._aFilterData : d._aSortData
        }, 1)
    }); u("linhas (). Invalidate ()", "linha (). Invalidate ()", função(a) {
        return this.iterator("linha", função(b, c) {
            da(b, c, a)
        })
    }); u("linhas (). índices ()", "linha (). índice ()", função() {
        return this.iterator("linha",
            função(a, b) {
                retorno b
            }, 1)
    }); u("linhas (). ids ()", "linha (). id ()", função(a) {
        para(var b = [], c = this.context, d = 0, e = c.length; d < e; d++) para(var f = 0, g = este[d].comprimento; f < g; f++) {
            var h = c[d].rowIdFn(c[d].aoData[isto[d][f]]._ aData);
            b.push((!0 === a ? "#" : "") + h)
        }
        retornar novo s(c, b)
    }); u("linhas (). remove ()", "linha (). remove ()", função() {
        var a = this;
        this.iterator("linha", função(b, c, d) {
            var e = b.aoData,
                f = e[c],
                g, h, i, m, l, e.splice(c, 1);
            g = 0;
            para(h = e.length; g < h; g++) if (i = e[g], l = i.anCells, nulo! == i.nTr && (i.nTr._DT_RowIndex = g), nulo! == l) {
                i = 0 para(m =
                    l.length; i < m; i++) l[i]._ DT_CellIndex.row = g
            } pa(b.aiDisplayMaster, c);
            pa(b.aiDisplay, c);
            pa(a[d], c, !1);
            0 < b._iRecordsDisplay && b._iRecordsDisplay - ;
            Sa(b);
            c = b.rowIdFn(f._aData);
            c! == k && delete b.aIds[c]
        });
        this.iterator("tabela", function (a) {
            para(var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
        });
        retorne este
    }); o("rows.add () ", function (a) {
        var b = this.iterator(" tabela ", função(b) {
                    var c, f, g, h = [];
                    f = 0;
                    para(g = a.length; f c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(na(b, c)[0]) : h.push(O b, c));
                    retorno h
                }
                1),
            c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        retorno c
    }); o("row ()", função(a, b) {
        return cb(this.rows(a, b))
    }); o("linha (). dados ()", função(a) {
        var b = this.context;
        se(a === k) retornar b.length && this.length ? b[0].aoData[este[0]]._ aData : k;
        var c = b[0].aoData[este[0]];
        c._aData = a;
        h.isArray(a) && c.nTr.id && N(b[0].rowId)(a, c.nTr.id);
        da(b[0], this[0], "dados");
        retorne este
    }); o(nó "row ()). () ", function () {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[isto[0]].nTr || nulo : nulo
    }); o(" linha.add () ", função(a) {
        um exemplo de h &&
            a.length && (a = a[0]);
        var b = this.iterator("tabela", função(b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? na(b, a)[0] : O(b, a)
        });
        retorne this.row(b[0])
    });
    var db = função(a, b) {
        var = a.context;
        if (c.length && (c = c[0].aoData[b! == k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k
    }, Tb = function (a, b) {
        var = a.context;
        if (c.length && a.length) {
            var d = c[0].aoData[a[0]];
            if (d._detalhes) {
                (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
                var e = c[0],
                    f = novo s(e),
                    g = e.aoData;
                f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                0 < D(g, "_ detalhes").Length && (f.on("draw.dt.DT_details", função(a, b) {
                    e === b && f.rows({
                        page: "atual"
                    }).(0).Cada(function (a) {
                        a = g[a];
                        a._detailsShow && a._details.insertApós(a.nTr)
                    })
                }), f.on(função "column-visibility.dt.DT_details", (a, b) {
                    se(e === b) para(var c, d = V(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td [colspan]").attr("colspan", d)
                }), f.on("destroy.dt.DT_details", função(a, b) {
                    if (e == = b) para(var c = 0, d = g.length; c < d; c++) g[c]._ detalhes && db(f, c)
                }))
            }
        }
    }; o("linha (). filho () ", função(a, b) {
            var c =
                this.context;
            if (a === k) retornar c.length && this.length ? c[0].aoData[este[0]]._ detalhes : k;
            if (!0 === a) this.child.show();
            else if (!1 === a) db(isto);
            else if (c.length && this.length) {
                var d = c[0],
                    c = c[0].aoData[isto[0]],
                    e = [],
                    f = função(a, b) {
                        if (h.isArray(a) || um exemplo de h) para(var c = 0, k = a.length; c < k; c++) f(a[c], b);
                        senão a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr> <td /> </ tr> ").addClass(b), h(" td ", c).addClass(b).html(a)[0].colSpan = v(d), e.push(c[0])
                        };
                        f(a, b);
                        detalhes de c. && c._details.detach();
                        c._details = h(e);
                        c._detailsShow && c._details.insertAfter(c.nTr)
                    }
                retornar este
            }); o(["row (). child.show ()", "row (). child (). show ()"], função() {
            Tb(this, !0);
            retorne isto
        }); o(["row (). Child.hide ()", "row (). Child (). Hide ()"], function () {
            Tb(this, !1);
            retorne isto
        }); o(["row (). child.remove ()", "row (). child (). remove ()"], function () {
            db(este);
            return this
        }); o("linha (). child.isShown ()", function () {
            var a = este.contexto;
            retorno a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var bc = / ^ ([^:] +): (nome | visIdx | visível) $ /, Ub = função(a, b,
            c, d, e) {
            para(var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
        }; o("colunas ()", função(a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
            var b = bb(b),
                c = this.iterator("tabela", função(c) {
                        var e = a,
                            f = b,
                            g = c.aoColunas,
                            j = D(g, "sName"),
                            i = D(g, "nTh");
                        return ab("coluna", e, função(a) {
                            var b = Nb(a);
                            se(a === "") retornar Y(g.length);
                            if (b! = = null) return [b > = 0 ? b : g.length + b];
                            if (tipo de uma === "funcao") {
                                var e = Ba(c, f);
                                retorno h.map(g, funcao(b, f) {
                                    return a(f, ub(c, f, 0, 0, e), i[f]) ? f : null
                                })
                            }
                            var k = tipo de uma === "string" ? a.match(bc) :
                                "";
                            se(k) mudar(k[2]) {
                                caso "visIdx": caso "visível": b = parseInt(k[1], 10);
                                se(b < 0) {
                                    var n = h.map(g, função(a, b) {
                                        retorno a.bVisível ? b : nulo
                                    });
                                    retorno[n[n.length + b]]
                                }
                                retorno[aa(c, b)];
                                caso "nome": retorno h.map(j, função(a, b) {
                                    return a === k[1] ? b : nulo
                                });
                                padrão: return []
                            }
                            se(a.nodeName && a._DT_CellIndex) retornar[a._DT_CellIndex.column] b = h(i).filter(a).map(function () {
                                retorno h.inArray(this, i)
                            }).toArray();
                            if (b.length || !a.nodeName) retorno b;
                            b = h(a).closest("* [dados-coluna-dt]");
                            retorno b.length ? [b.data("coluna-dt")] : []
                        }, c, f)
                    },
                    1);
            c.selector.cols = a;
            c.selector.opts = b;
            retorno c
        }); u("colunas (). Cabeçalho ()", "coluna (). Cabeçalho ()", function () {
            return this.iterator("coluna", função(a, b) {
                return a.aoColumns[b].nTh
            }, 1)
        }); u("colunas (). footer ()", "coluna (). rodapé () ", function () {
            return this.iterator(" coluna ", função(a, b) {
                return a.aoColumns[b].nTf
            }, 1)
        }); u(" colunas (). data () ", " column (). data () ", function () {
            retornar this.iterator(" colunas-linhas ", Ub, 1)
        }); u(" colunas (). dataSrc () ", " coluna () .dataSrc () ", function () {
            return this.iterator(" coluna ", função(a, b) {
                    return a.aoColumns[b].mData
                },
                1)
        }); u("colunas (). Cache ()", "coluna (). Cache ()", função(a) {
            return this.iterator("coluna-linhas", função(b, c, d, e, f) {
                retorno ja(b.aoData, f, "pesquisa" === a ? "_ aFilterData" : "_ aSortData", c)
            }, 1)
        }); u("colunas (). nodes () ", " column (). nodes () ", function () {
            retornar this.iterator(" coluna-linhas ", função(a, b, c, d, e) {
                retorno ja(a.aoData, e, " anCells ", b)
            }, 1)
        }); u(" colunas (). visible () ", " coluna (). visible () ", função(a, b) {
            var = this.iterator(coluna ", function (b, c) {if (a === k) retornar b.aoColumns [c] .BVisible; var f = b.aoColumns, g = f [c], j = b.aoData,
                i, m, l;
                if (a! == k && g.bVisible! == a) {
                    if (a) {
                        var n = h.inArray(!0, D(f, "bVisible"), c + 1);
                        i = 0;
                        para(m = j.length; i < m; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[n] | | nulo
                        }
                    }
                    mais h(D(b.aoData, "anCells", c)).detach();
                    g.bVisible = a;
                    fa(b, b.aoHeader);
                    fa(b, b.aoFooter);.aiDisplay.length || h(b.nTBody).find("td [colspan]").attr("colspan", V(b));
                    xa(b)
                }
            }); a! == k && .iterator("coluna", função(c, e) {
            r(c, nulo, "visibilidade da coluna", [c, e, a, b])
        }), (b === k || b) && este.columns.adjust());
        return c
    });
u("colunas (). indexes ()", "coluna (). index ()",
    function (a) {
        return this.iterator("coluna", função(b, c) {
            retorno "visível" === a ? ba(b, c) : c
        }, 1)
    });
o("colunas. adjust () ", function () {
    retornar this.iterator(" table ", função(a) {
        $(a)
    }, 1)
});
o(" column.index () ", função(a, b) {
    if (0! == this.context.length) {
        var c = this.context[0];
        if ("fromVisible" === a || "toData" === a) retornar aa(c, b) if ("fromData" === a || "toVisible" === a) retornar ba(c, b)
    }
});
o("coluna ()", função(a, b) {
    return cb(isto.columns(a, b))
});
o("células ()", função(a, b, c) {
    h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = nulo));
    h.isPlainObject(b) && (c = b, b = nulo);
    if (null === b || b === k) retorne this.iterator("tabela", função(b) {
        var d = a,
            e = bb(c),
            f = b.aoData,
            g = Ba(b, e),
            j = Qb(ja(f, g, "anCells")),
            i = h([].concat.apply([], j)),
            l, m = b.aoColumns.length,
            n, o, u, s, r, v;
        return ab("célula", d, função(a) {
            var c = tipo de == = "function";
            if (a === null || a === k || c) {
                n = [];
                o = 0;
                para(u = g.length; o < u; o++) {
                    l = g[o];
                    para(s = 0; s < m; s++) {
                        r = {
                            linha: l,
                            coluna: s
                        };
                        se(c) {
                            v = f[l];
                            a(r, B(b, l, s), v.anCells v.anCells[s]: null) && n.push(r)
                        } else n.push(r)
                    }
                }
                return n
            }
            if (h.isPlainObject(a)) return a.column! ==
                k && a.row! == k && h.inArray(a.row, g) ! == -1 ? [a] : [];
            c = i.filter(a).map(função(a, b) {
                retorno {
                    linha: b._DT_CellIndex.row,
                    coluna: b._DT_CellIndex.column
                }
            }).toArray();
            if (c.length || !a.nodeName) retorna c;
            v = h(a).closest("* [dados -dt-row] ");
            return v.length ? [{
                linha: v.data(" dt-row "),
                coluna: v.data(" coluna-dt ")
            }] : []
        }, b, e)
    });
    var d = this.columns(b),
        e = this.rows(a),
        f, g, j, i, m;
    this.iterator("tabela", função(a, b) {
        f = [];
        g = 0;
        para(j = e[b].comprimento; g < j; g++) {
            i = 0;
            para(m = d[b].comprimento; i < m; i++) f.push({
                row: e[b][g],
                coluna: d[b][i]
            })
        }
    }, 1);
    var l = this.cells(f,
        c);
    h.extend(l.selector, {
        cols: b,
        linhas: a,
        opts: c
    });
    return l
});
u("células (). nós ()", "cell (). node ( ) ", function () {
    return this.iterator(" célula ", função(a, b, c) {
        retorno(a = a.aoData[b]) && a.anCells ? a.anCells[c] : k
    }, 1)
});
o("células (). Dados ()", função() {
    return this.iterator("célula", função(a, b, c) {
        retorno B(a, b, c)
    }, 1)
});
u("células (). Cache ()", "cell (). Cache ()", função(a) {
    a = "pesquisa" === a ? "_ AFilterData" : "_ aSortData";
    return this.iterator("célula", função(b, c, d) {
        retorno b.aoData[c][a][d]
    }, 1)
});
u("células (). render ()", "cell (). render ()",
    function (a) {
        return this.iterator("célula", função(b, c, d) {
            retorno B(b, c, d, a)
        }, 1)
    });
u("células (). índices ( ) ", " cell (). index () ", function () {
    retornar this.iterator(" cell ", função(a, b, c) {
        return {
            linha: b,
            coluna: c,
            columnVisible: ba(a, c)
        }
    }, 1)
});
u("células (). invalidate ()", "cell (). invalidate ()", função(a) {
        return this.iterator("cell", função(b), c, d) {
            da(b, c, a, d)
        })
};
o("célula ()", função(a, b, c) {
    retorno cb(this.cells(a, b, c))
});
o("célula (). dados ()", função(a) {
    var b = este.contexto,
        c = isto[0];
    se(a === k) devolve b.length && c.length B(b[0],
        c[0].ver, c[0].coluna): k;
    jb(b[0], c[0].revela, c[0].coluna, a);
    da(b[0], c[0]., "Data", c[0].column);
    retorne este
});
o("order ()", função(a, b) {
    var = this.context;
    if (a === k) retornar 0! == c.length ? c[0].aaEscalar : k;
    "número" === tipoof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slic e.call(argumentos));
    return this.iterator("tabela", função(b) {
        b.aaSorting = a.slice()
    })
});
o(" order.listener () ", função(a, b, c) {
    return this.iterator(" tabela ", função(d) {
        Ma(d, a, b, c)
    })
});
o(" ordem. fixed () ", função(a) {
    if (!a) {
        var b =
            this.context,
            b = b.length ? b[0].aaSortingFixed : k;
        retorno h.isArray(b) ? {
            pre: b
        } : b
    }
    retorna this.iterator("tabela", função(b) {
        b.aaSortingFixed = h.extend(!0, {}, a)
    })
});
o(["colunas (). order ()", "coluna (). order ()"], função(a) {
    var b = this;
    return this.iterator("tabela", função(c, d) {
        var e = [];
        h.each(b[d], função(b, c) {
            e.push([c, a])
        });
        c.aaSorting = e
    })
});
o("search ()", função(a, b, c, d) {
    var e = this.context;
    return a === k ? 0! == e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("tabela", função(e) {
        e.oFeatures.bFilter && ga(e,
            h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: nulo === b ? !1 : b,
                bSmart: nulo === c ? !0 : c,
                bCaseInsensitivo: nulo === d ? !0 : d
            }), 1)
    })
});
u("colunas (). pesquisa ()", "coluna (). pesquisa ()", função(a, b, c, d) {
    retorno this.iterator("coluna", função(e, f) {
        var g = e.aoPreSearchCols;
        if (a === k) retorna g[f].search;
        e.oFeatures.bFilter && (h.extend(g[f], {
            sSearch: a + "",
            bRegex: nulo === b ? !1 : b,
            bSmart: nulo === c ? !0 : c,
            bCaseInsensitivo: nulo === d ? 0 : d
        }), ga(e, e.oPreviousSearch, 1))
    })
});
o("state ()", function () {
    retornar this.context.length ? this.context[0].oSavedState :
        null
});
o("state.clear ()", function () {
            retornar this.iterator("table", função(a) {
                a.fnStateSaveCallback.call(a.oInstance, a, {})
            })
        }
        o("state.loaded ()", function () {
            retornar this.context.length ? this.context[0].oLoadedState : null
        }); o("state.save ()", function () {
            return this.iterator("table", function (a) {
                xa(a)
            })
        }); n.versionCheck = n.fnVersionCheck = função(a) {
            para(var b = n.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c! == d) return c > d;
            return !0
        }; n.isDataTable =
        n.fnIsDataTable = function (a) {
            var b = h(a).get(0),
                c = !1;
            if (uma ocorrência de n.Api) retorna!0;
            h.each(n.settings, function (a, e) {
                var f = e.nScrollHead ? h("tabela", e.nScrollHead)[0] : null,
                    g = e.nScrollFoot ? h("tabela", e.nScrollFoot)[0] : nulo;
                se(e.nTable === b || f === b || g === b) c = !0
            });
            return c
        }; n.tables = n.fnTables = function (a) {
            var b = !1;
            h.isPlainObject(a) && (b = a.api, a = a.visible);
            var c = h.map(n.configurações, função(b) {
                if (!A || a && h(b.nTable).é(": visible")) return b.nTable
            });
            return b ? new s(c) : c
        }; n.camelToHungarian = J; o("$ ()", função(a, b) {
            var c =
                this.rows(b).nodes(),
                c = h(c);
            retorno h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
        }); h.each(["on", "one", "off"], função(a, b) {
            o(b + "()", função() {
                var a = Array.prototype.slice.call(argumentos);
                a[0] = h.map(a[0].split(/ \ s /), função(a) {
                    return !a.match(/ \. dt \ b /) ? a + ". dt" : a
                }).join("");
                var d = h(this.tables().nodes());
                d[b].apply(d, a);
                retorne este
            })
        }); o("limpar () ", function () {
            return this.iterator(" tabela ", função(a) {
                oa(a)
            })
        }); o(" configurações () ", função() {
            return new s(this.context, this.context)
        }); o("init ()", function () {
            var a =
                this.context;
            return a.length ? a[0].oInicia : null
        }); o("data ()", function () {
                retorne this.iterator("tabela", funcao(a) {
                        retorno D(a).aoData, "_ aData")
                }) flatten()
        }; o("destroy ()", função(a) {
            a = a || !1;
            return this.iterator("tabela", função(b) {
                var = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, função(a) {
                    retorno a.nTr
                }), o;
                b.bDestroying = !0;
                r(b, "aoDestroyCallback ", " destruir ", [b]);
                a || (novas colunas s(b)).().visible(!0);
                k.off(". DT ").find(": não (tbody *) ) ").off(". DT ");
                h(E).off(". DT -" + b.sInstance);
                e! = g.parentNode && (i.children("thead").detach(), i.append(g));
                j && e! = j.parentNode && (i.children("tfoot").detach(), i.append(j));
                b.aaSorting = [];
                b.aaSortingFixed = [];
                wa(b);
                h(l).removeClass(b.asStripeClasses.join(""));
                h("th, td", g).removeClass(d.sSortable + "" + d.sSortableAsc + "" + d.sSortableDesc + "" + d.sSortableNone);
                f.children().detach();
                f.append(l);
                g = a ? "remove" : "desanexar";
                i[g]();
                k[g]();
                !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("largura", b.sDestroyWidth).removeClass(d.sTable),
                    (o = b.asDestroyStripes.length) && f.children().each(função(a) {
                        h(isto).addClass(b.asDestroyStripes[a % o])
                    }));
                c = h.inArray(b, n.settings); - 1! == c && n.settings.splice(c, 1)
            })
        }); h.each(["coluna", "linha", "célula"], função(a, b) {
                o(b + "s (). every ()", função(a) {
                    var d = this.selector.opts,
                        e = isto;
                    retorne this.iterator(b, função(f, g, h, i, m) {
                        a.call(e[b](g, "célula" === b ? h : d, "célula" === b ? d : k), g, h, i, m)
                    })
                })
            }
            o("i18n ()", função(a, b, c) {
                var d = este.contexto[0],
                    a = S(a)(d.oIdioma);
                a === k && (a = b);
                c! == k && h.isPlainObject(a) && (a = a[c] ! == k ? a[c] :
                    a._);
                retorne a.replace("% d", c)
            }); n.version = "1.10.18"; n.settings = []; n.models = {}; n.models.oSearch = {
                bCaseInsensitive: !0,
                sSearch: "",
                bRegex: !1,
                bSmart: !0
            }; n.models.oRow = {
                nTr: null,
                anCells: nulo,
                _aData: [],
                _ aSortData: null,
                _aFilterData: null,
                _sFilterRow: null,
                _sRowStripe: "",
                src: nulo,
                idx: -1
            }; n.models.oColumn = {
                idx: nulo,
                aDataSort: null,
                asSorting: nulo,
                bSorientavel: nulo,
                bSortable: nulo,
                bVisible: nulo,
                _sManualType: null,
                _bAttrSrc: !1,
                fnCreatedCell: nulo,
                fnGetData: null,
                fnSetData: nulo,
                mData: null,
                mRender: nulo,
                nTh: nulo,
                nTf: nulo,
                sClass: null,
                sContentPadding: nulo,
                sDefaultConteúdo: null,
                sName: nulo,
                sSortDataType: "std",
                sSortingClass: nulo,
                sSortingClassJUI: nulo,
                sTítulo: nulo,
                sTipo: nulo,
                sWidth: nulo,
                sWidthOrig: nulo
            }
            n.defaults = {
                aaData: null,
                aaSorting: [[0, "asc"]],
                aaSortingFixed: [],
                ajax: nulo,
                aLengthMenu: [10, 25, 50, 100],
                aoColumns: null,
                aoColumnDefs: null,
                aoSearchCols: [],
                asStripeClasses: null,
                bAutoWidth: !0,
                bDeferRender: !1,
                bDestroy: !1,
                bFilter: !0,
                bInfo: !0,
                bComprimentoAlteração: !0,
                bPaginado: !0,
                bProcessamento: !1,
                bRecuperação: !1,
                bScrollCollapse: !1,
                bServerSide: !1,
                bSort: !0,
                bSortMulti: !0,
                bSortCellsTop: !1,
                bSortClasses: !0,
                bStateSave: !1,
                fnCreatedRow: nulo,
                fnDrawCallback: null,
                fnFooterCallback: nulo,
                fnFormatNumber: function (a) {
                    retorno a.toString() Substituir(/ \ B (? = (\ d {3}) + (?! \ d)) /
                        g, this.oLanguage.sThousands)
                },
                fnHeaderCallback: null,
                fnInfoCallback: nulo,
                fnInitComplete: null,
                fnPreDrawCallback: null,
                fnRowCallback: null,
                fnServerData: nulo,
                fnServerParams: null,
                fnStateLoadCallback: function (a) {
                    tentar {
                        retornar JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables _" +
                            a.sInstance + "_" + location.pathname))
                    } catch (b) {}
                },
                fnStateLoadParams: null,
                fnStateLoaded: nulo,
                fnStateSaveCallback: function (a, b) {
                    tentar {
                        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables _" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
                    } catch (c) {}
                },
                fnStateSaveParams: nulo,
                iStateDuration: 7200,
                iDeferLoading: null,
                iDisplayLength: 10,
                iDisplayStart: 0,
                iTabIndex: 0,
                oClasses: {},
                oLanguage: {
                    oAria: {
                        sSortAscending: ": ativar para ordenar a coluna ascendente",
                        sSortDescending: ": ativar para ordenar a coluna descendente"
                    },
                    oPaginate: {
                        sFirst: "Primeiro",
                        sLast: "Último",
                        sNext: "Próximo",
                        sAnterior: "Anterior"
                    },
                    sEmptyTable: "Nenhum dado disponível na tabela",
                    sInfo: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                    sInfoEmpty: "Mostrando 0 a 0 de 0 entradas",
                    sInfoFiltered: "(filtrado do total de entradas de _MAX_)",
                    sInfoPostFix: "",
                    sDecimal: "",
                    sThousands: ","
                    sLengthMenu: "Mostrar entradas _MENU_",
                    sLoadingRecords: "Carregando ...",
                    sProcessando: "Processando ...",
                    sSearch: "Pesquisar:",
                    sSearchPlaceholder: "",
                    sUrl: "",
                    sZeroRecords: "Nenhum registro correspondente encontrado"
                },
                oSearch: h.extend({}
                    n.models.oSearch),
                sAjaxDataProp: "dados",
                sAjaxSource: null,
                sDom: "lfrtip",
                searchDelay: nulo,
                sPaginationType: "simple_numbers",
                sScrollX: "",
                sScrollXInner: "",
                sScrollY: "",
                sServerMethod: "GET",
                renderizador: null,
                rowId: "DT_RowId"
            }; Z(n.defaults); n.defaults.column = {
                aDataSort: nulo,
                iDataSort: -1,
                asSorting: ["asc", "desc"],
                bEscalável: !0,
                bSortable: !0,
                bVisible: !0,
                fnCreatedCell: nulo,
                mData: null,
                mRender: nulo,
                sCellType: "td",
                sClass: "",
                sContentPadding: "",
                sDefaultConteúdo: nulo,
                sName: " ",
                sSortDataType: " std ",
                sTitle: null,
                sTipo: nulo,
                sWidth: nulo
            }; Z(n.defaults.column); n.models.oSettings = {
                oCaracterísticas: {
                    bAutoWidth: nulo,
                    bDeferRender: null,
                    bFiltro: nulo,
                    bInfo: nulo,
                    bLengthChange: nulo,
                    bPaginado: nulo,
                    b Processamento: nulo,
                    bServerSide: null bSort: null,
                    bSortMulti: nulo,
                    bSortClasses: null,
                    bStateSave: nulo
                },
                oScroll: {
                    bRecolher: nulo,
                    iBarWidth: 0,
                    sX: nulo,
                    sXInridor: nulo,
                    sY: nulo
                },
                oLanguage: {
                    fnInfoCallback: nulo
                },
                oBrowser: {
                    bScrollOversize: !1,
                    bScrollbarLeft: !1,
                    bBounding: !1,
                    barWidth: 0
                },
                ajax: nulo,
                aanFeatures: [],
                aoData: [],
                aiDisplay: [],
                aiDisplayMaster: [],
                aIds: {},
                aoColumns: [],
                aoHeader: [],
                aoFooter: [],
                oPreviousSearch: {},
                aoPreSearchCols: [],
                aaSorting: null,
                aaSortingFixed: [],
                asStripeClasses: null,
                asDestroyStripes: [],
                sDestroyWidth: 0,
                aoRowCallback: [],
                aoHeaderCallback: [],
                aoFooterCallback: [],
                aoDrawCallback: [],
                aoRowCreatedCallback: [],
                aoPreDrawCallback: [],
                aoInitComplete: [],
                aoStateSaveParams: [],
                aoStateLoadParams: [],
                aoStateLoaded: [],
                sTableId: "",
                nTable: null,
                nTHead: null,
                nTFoot: null,
                nTBody: nulo,
                nTableWrapper: null,
                bDeferLoading: !1,
                bInicializado: !1,
                aoOpenRows: [],
                sDom: null,
                searchDelay: nulo,
                sPaginationType: "two_button",
                iStateDuration: 0,
                aoStateSave: [],
                aoStateLoad: [],
                oSaveState: null,
                oLoadedState: nulo,
                sAjaxSource: null,
                sAjaxDataProp: nulo,
                bAjaxDataGet: !0,
                jqXHR: nulo,
                json: k,
                oAjaxData: k,
                fnServerData: null,
                aoServerParams: [],
                sServerMethod: null,
                fnFormatNumber: null,
                aLengthMenu: null,
                iDraw: 0,
                bDesenho: !1,
                iDrawError: -1,
                _iDisplayLength: 10,
                _iDisplayStart: 0,
                _iRecordsTotal: 0,
                _iRecordsDisplay: 0,
                oClasses: {},
                bFiltered: !1,
                bSorted: !1,
                bSortCellsTop: null,
                oIniciar: null,
                aoDestroyCallback: [],
                fnRecordsTotal: function () {
                    retornar "ssp" == y(this) ? 1 * this._iRecordsTotal :
                        this.aiDisplayMaster.length
                },
                fnRecordsDisplay: function () {
                    retornar "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
                },
                fnDisplayEnd: function () {
                    var a = this._iDisplayLength,
                        b = this._iDisplayStart,
                        c = b + a,
                        d = this.aiDisplay.length,
                        e = this.oFeatures,
                        f = e.bPaginate;
                    retorno e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
                },
                oInstance: null,
                sInstance: nulo,
                iTabIndex: 0,
                nScrollHead: null,
                nScrollFoot: nulo,
                aLastSort: [],
                oPlugins: {},
                rowIdFn: nulo,
                rowId: nulo
            }; n.ext = x = {
                botões: {},
                classes: {},
                build: "dt / dt-1.10.18",
                errMode: "alerta",
                recurso: [],
                pesquisa: [],
                seletor: {
                    cell: [],
                    coluna: [],
                    linha: []
                },
                interno: {},
                legado: {
                    ajax: null
                },
                pager: {},
                renderizador: {
                    pageButton: {},
                    cabeçalho: {}
                },
                ordem: {},
                digite: {
                    detect: [],
                    pesquisa: {},
                    order: {}
                },
                _ unique: 0,
                fnVersionCheck: n.fnVersionCheck,
                iApiIndex: 0,
                oJUIClasses: {},
                sVersion: n.version
            }; h.extend(x, {
                afnFiltering: x.search,
                aTipos: x.type.detect,
                ofnSearch: x.type.search,
                oSort: x.type.order,
                afnSortData: x.order,
                aoFeatures: x.feature,
                oApi: x.internal,
                oStdClasses: x.classes,
                oPagination: x.pager
            }); h.extend(n.ext.classes, {
                sTable: "dataTable",
                sNoFooter: "não-rodapé",
                sPageButton: "paginate_button",
                sPageButtonActive: "atual",
                sPageButtonDisabled: "desativado",
                sStripeOdd: "ímpar",
                sStripeEven: "mesmo",
                sRowEmpty: "dataTables_empty",
                sWrapper: "dataTables_wrapper",
                sFiltro: "dataTables_filter",
                sInfo: "dataTables_info",
                sPaginação: "dataTables_paginate paging _",
                sLength: "dataTables_length",
                sProcessamento: "dataTables_processing",
                sSortAsc: "sorting_asc",
                sSortDesc: "sorting_desc",
                sSortable: "classificação",
                sSortableAsc: "sorting_asc_disabled",
                sSortableDesc: "sorting_desc_disabled",
                sSortableNone: "sorting_disabled",
                sSortColumn: "classificando _",
                sFilterInput: "",
                sLengthSelect: "",
                sScrollWrapper: "dataTables_scroll",
                sScrollHead: "dataTables_scrollHead",
                sScrollHeadInner: "dataTables_scrollHeadInner",
                sScrollBody: "dataTables_scrollBody ",
                sScrollFoot: " dataTables_scrollFoot ",
                sScrollFootInner: " dataTables_scrollFootInner ",
                sHeaderTH: " ",
                sFooterTH: " ",
                sSortJUIAsc: " ",
                sSortJUIDesc: " ",
                sSortJUI: " ",
                sSortJUIAscAllowed: " ",
                sSortJUIDescAllowed: " ",
                sSortJUIWrapper: "",
                sSortIcon: "",
                sJUIHeader: "",
                sJUIFooter: ""
            });
            var Kb = n.ext.pager; h.extend(Kb, {
                simples: function () {
                    return ["anterior", "próximo"]
                },
                completo: function () {
                    return ["primeiro", "anterior", "próximo", "último"]
                },
                números: função(a, b) {
                    retorno[ia(a, b)]
                },
                simple_numbers: função(a, b) {
                    return ["anterior", ia(a, b), "próximo"]
                },
                full_numbers: função(a, b) {
                    retorno["primeiro", "anterior", ia(a, b), "próximo", "last"]
                },
                first_last_numbers: função(a, b) {
                    return ["primeiro", ia(a, b), "último"]
                },
                _ números: ia,
                numbers_length: 7
            }); h.extend(!0, n.ext.renderer, {
                    pageButton: {
                        _: function (a, b, c, d, e,
                            f) {
                            var g = a.oClasses,
                                j = a.oLanguage.oPaginate,
                                i = a.oLanguage.oAria.paginate || {},
                                m, l, n = 0,
                                o = função(b, d) {
                                    var k, s, u, r, v = função(b) {
                                        Ta(a, b.data.action, true)
                                    };
                                    k = 0;
                                    para(s = d.length; k < s; k++) {
                                        r = d[k];
                                        if (h.isArray(r)) {
                                            u = h("<" + (r.DT_el || "div") + "/>").appendTo(b);
                                            o(u, r)
                                            else {
                                                m = null;
                                                l = "";
                                                switch (r) {
                                                    caso "reticências": b.append('<span class = "reticências"> & # x2026; </ span>');
                                                    "first": m = j.sFirst;
                                                    l = r + (e > 0 ? "" : "" + g.sPageButtonDisabled);
                                                    quebra;
                                                    caso "anterior": m = j.sAnterior;
                                                    l = r + (e > 0 ? "" : "" + g.sPageButtonDisabled);
                                                    break;
                                                    caso "próximo": m =
                                                        j.sNext;
                                                    l = r + (e < f - 1 ? "" : "" + g.sPageButtonDisabled);
                                                    quebra;
                                                    caso "último": m = j.sLast;
                                                    l = r + (e < f - 1 ? "" : "" + g.sPageButtonDisabled);
                                                    break;
                                                    padrão: m = r + 1;
                                                    l = e === r ? g.sPageButtonActive : ""
                                                }
                                                se(m! == null) {
                                                    u = h("<a > ", {
                                                        " class ": g.sPageButton + " " + l,
                                                        " aria-controls ": a.sTableId,
                                                        " aria-label ": i[r],
                                                        " dados-dt-idx ": n,
                                                        tabindex: a.iTabIndex,
                                                        id: c === 0 && typeof r === "string" ? a.sTableId + "_" + r : null
                                                    }).html(m).appendTo(b);
                                                    Wa(u, {
                                                        ação: r
                                                    }, v);
                                                    n++
                                                }
                                            }
                                        }
                                    }, s;
                                    tente {
                                        s = h(b).localize(H.activeElement).data("dt-idx")
                                    }
                                    capturar(u) {}
                                    o(h(b).vazio(), d);
                                    s! == k && h(b).find("[data-dt-idx =" +
                                        s + "]").focus()
                                }
                        }
                    }); h.extend(n.ext.type.detect, [function (a, b) {
                    var c = b.oLanguage.sDecimal;
                    return $ a(a, c)
                    "num" + c: null
                }, função(a) {
                    if (a && !(uma instância de Data) && !Zb.test(a)) return nulo;
                    var b = Date.parse(a);
                    retorno nulo! == b && !isNaN(b) || M(a) ? "data" : nulo
                }, função(a, b) {
                    var = b.o.Idioma.sDecimal;
                    retorno $ a(a, c, 0) ? "num-fmt" + c : null
                }, função(a, b) {
                    var c = b.oIdioma.sDecimal;
                    retorno Pb(a, c) ? "html-num" + c : nulo
                }, função(a, b) {
                    var c = b.oIdioma.Decimal;
                    retorno Pb(a, c, 0) ? "html-num-fmt" + c : nulo
                }, funo(a) {
                    retorno M(a) ||
                        "string" === typeof a && -1! == a.indexOf("<") ? "html" : nulo
                }]); h.extend(n.ext.type.search, {
                    html: function (a) {
                        return M(a) ? a : "string" === typeof a ? a.replace(Mb, "").replace(Aa, "") : ""
                    },
                    string: função(a) {
                        retorno M(a) ? a : "string" === typeof a ? a.replace(Mb, "") : a
                    }
                });
                var za = função(a, b, c, d) {
                    se(0! == a && (!a || "-" === a)) return -Infinity;
                    b && (a = Ob(a, b));
                    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
                    return 1 * a
                }; h.extend(x.type.order, {
                    "date-pre": function (a) {
                        a = Date.parse(a);
                        return isNaN(a) ? -Infinity : a
                    },
                    "html-pre": function (a) {
                        retorno M(a) ?
                            "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
                    },
                    "string-pre": função(a) {
                        retorno M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
                    },
                    "string-asc": função(a, b) {
                        retorno a < b ? -1 : a > b ? 1 : 0
                    },
                    "string-desc": função(a, b) {
                        retorno a < b ? 1 : a > b ? -1 : 0
                    }
                }); Da("") h.extend(!0, n.ext.renderer, {
                    header: {
                        _: function (a, b, c, d) {
                            h(a.nTable).on("order.dt.DT", função(e, f, g, h) {
                                    se(a === f) {
                                        e = c.idx;
                                        b.removeClass(c.sclassingClass + "" + d.sSortAsc + "" + d.sSortesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc :
                                            c.SSortingClass)
                                    }
                                }
                            }
                        },
                        jqueryui: function (a, b, c, d) {
                            h("<div />").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span />").addClass(d.sSortIcon + "" + c.sSortingClassJUI)).appendTo(b);
                            h(a.nTable).on("order.dt.DT", função(e, f, g, h) {
                                se(a === f) {
                                    e = c.idx;
                                    b.removeClass(d.sSortAsc + "" + d.sSortDesc).addClass(h[e] == "asc" ? d.SSortScsc : h[e] == "desc" ? d.sSortDesc : c.SSortingClass);
                                    b.find("span". + d.sSortIcon).removeClass(d.sSortJUIAsc + "" + d.sSortJUIDesc + "" + d.sSortJUI + "" + d.sSortJUIAscAllowed + "" + d.sSortJUIDescAllowed).addClass(h[e] ==
                                        "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                                }
                            })
                        }
                    }
                });
                var Vb = função(a) {
                    return "string" === typeof a ? substitua(/ </
                        g, "& lt;").substitua(/> /
                        g, "& gt;").substitua(/ "/
                        g, " & quot; ") : a
                }; n.render = {
                    número: function (a, b, c, d, e) {
                        return {
                            display: função(f) {
                                if ("número"! == tipoof f && "string"! == tipoof f) retorno f;
                                var g = 0 > f ? "-" : "",
                                    h = parseFloat(f);
                                if (isNaN(h)) retorna Vb(f);
                                h = h.toFixed(c);
                                f = Math.abs(h);
                                h = parseInt(f, 10);
                                f = c ? b + (fh).toFixed(c).substring(2) : "";
                                retorno g + (d || "") + h.toString().replace(/ \ B (? = (\ D {3}) + (?! \ D)) /
                                    g,
                                    a) + f + (e || "")
                            }
                        }
                    },
                    text: function () {
                        retorno {
                            display: Vb
                        }
                    }
                }; h.extend(n.ext.internal, {
                    _ fnExternApiFunc: Lb,
                    _fnBuildAjax: sa,
                    _fnAjaxUpdate: lb,
                    _fnAjaxParameters: ub,
                    _fnAjaxUpdateDraw: VB,
                    _fnAjaxDataSrc: ta,
                    _fnAddColumn: Ea,
                    _fnColumnOptions: ka,
                    _fnAdjustColumnSizing: $,
                    _ fnVisibleToColumnIndex: aa,
                    _fnColumnIndexToVisible: ba,
                    _fnVisbleColumns: V,
                    _fnGetColumns: ma,
                    _fnColumnTypes: Ga,
                    _fnApplyColumnDefs: ib,
                    _fnHungarianMap: Z,
                    _fnCamelToHungarian: J,
                    _fnLanguageCompat: Ca,
                    _fnBrowserDetect: gb,
                    _fnAddData: O,
                    _fnAddTr: na,
                    _fnNodeToDataIndex: function (a,
                        b) {
                        return b._DT_RowIndex! == k ? b._DT_RowIndex : null
                    },
                    fnNodeToColumnIndex: function (a, b, c) {
                        retorno h.inArray(c, a.aoData[b].anCells)
                    },
                    _ fnGetCellData: B,
                    _fnSetCellData: jb,
                    _fnSplitObjNotation: Sim,
                    _fnGetObjectDataFn: S,
                    _fnSetObjectDataFn: N,
                    _fnGetDataMaster: Ka,
                    _fnClearTable: oa,
                    _fnDeleteIndex: pa,
                    _fnInvalidate: da,
                    _fnGetRowElements: Ia,
                    _fnCreateTr: Ha,
                    _fnBuildHead: kb,
                    _fnDrawHead: fa,
                    _fnDraw: P,
                    _fnReDraw: T,
                    _fnAddOptionsHtml: nb,
                    _fnDetectHeader: ea,
                    _fnGetUniqueThs: ra,
                    _fnFeatureHtmlFilter: pb,
                    _fnFilterComplete: ga,
                    _fnFilterCustom: yb,
                    _fnFilterColumn: xb,
                    _fnFilter: WB,
                    _fnFilterCreateSearch: Pa,
                    _fnEscapeRegex: Qa,
                    _fnFilterData: zb,
                    _fnFeatureHtmlInfo: SB,
                    _fnUpdateInfo: Cb,
                    _fnInfoMacros: Db,
                    _fnInitialise: ha,
                    _fnInitComplete: ua,
                    _fnLengthChange: Ra,
                    _fnFeatureHtmlLength: ob,
                    _fnFeatureHtmlPaginate: tb,
                    _fnPageChange: Ta,
                    _fnFeatureHtmlProcessing: qb,
                    _fnProcessingDisplay: C,
                    _fnFeatureHtmlTable: RB,
                    _fnScrollDraw: la,
                    _fnApplyToChildren: Eu,
                    _fnCalculateColumnWidths: FA,
                    _fnThrottle: Oa,
                    _fnConvertToWidth: Eb,
                    _fnGetWidestNode: Fb,
                    _fnGetMaxLenString: Gb,
                    _fnStringToCss: v,
                    _fnSortFlatten: X,
                    _fnSort: mb,
                    _fnSortAria: Ib,
                    _fnSortListener: Va,
                    _fnSortAttachListener: Ma,
                    _fnClassingClasses: wa,
                    _fnSortData: Hb,
                    _fnSaveState: xa,
                    _fnLoadState: Jb,
                    _fnSettingsFromNode: ya,
                    _fnLog: K,
                    _fnMapa: F,
                    _fnBindAction: Wa,
                    _fnCallbackReg: z,
                    _fnCallbackFire: r,
                    _fnLengthOverflow: s,
                    _fnRenderer: Na,
                    _fnDataSource: y,
                    _fnRowAttributes: A,
                    _fnExtend: Xa,
                    _fnCalculateEnd: function () {}
                }); h.fn.dataTable = n; n.$ = h; h.fn.dataTableSettings = n.settings; h.fn.dataTableExt = n.ext; h.fn.DataTable = função(a) {
                    retorno h(este).dataTable(a).api()
                }; h.each(n, função(a, b) {
                    h.fn.DataTable[a] = b
                }); retorno h.fn.dataTable
            });
