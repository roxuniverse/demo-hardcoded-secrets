const { createClient } = require('@supabase/supabase-js');

// TODO: move to .env before deploy (note ini sering ditulis, tapi jarang dieksekusi)
const SUPABASE_URL = 'https://xzklqmnrpqowuzabcdef.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ahuiwqh'; //CONTOH_KEY_PALSU_JANGAN_DIPAKAI

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;