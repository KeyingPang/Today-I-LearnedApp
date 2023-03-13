import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://awryssplqxopzxmsmpsq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3cnlzc3BscXhvcHp4bXNtcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0MzYxNzQsImV4cCI6MTk5NDAxMjE3NH0.XJGHOhpEtEn63jOhbUuAnRtPanOL_GJd4vGd3IOzJe4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
