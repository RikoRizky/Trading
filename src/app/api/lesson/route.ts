import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const body = await req.json().catch(() => ({}));

  const { title, description, topic_id, order_index, video_url, is_premium } = body;

  // Validasi input
  if (!title || !topic_id) {
    return NextResponse.json(
      { error: "title dan topic_id wajib" },
      { status: 400 }
    );
  }

  // Cek user login
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Cek hanya admin yang boleh
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();

  if (profileError || !profile?.is_admin) {
    return NextResponse.json(
      { error: "Forbidden: admin only" },
      { status: 403 }
    );
  }

  // INSERT KE LESSONS
  const { data, error } = await supabase.from("lessons").insert([
    {
      topic_id,
      title,
      description: description ?? null,
      order_index: order_index ?? 1,
      video_url: video_url ?? null,
      is_premium: is_premium ?? false,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
